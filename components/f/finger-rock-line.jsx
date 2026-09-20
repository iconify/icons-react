import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwt7q8brx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwt7q8brx"/>`,
		"fallback": "mingcute:finger-rock-line",
	});
}

export default Component;
