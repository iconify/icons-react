import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijnoz5bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijnoz5bge"/>`,
		"fallback": "basil:cross-solid",
	});
}

export default Component;
