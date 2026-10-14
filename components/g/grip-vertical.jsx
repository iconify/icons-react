import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnfl3zb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnfl3zb8j"/>`,
		"fallback": "matita:grip-vertical",
	});
}

export default Component;
