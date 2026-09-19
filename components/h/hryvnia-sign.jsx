import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjn8fxexl.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjn8fxexl"/>`,
		"fallback": "fa6-solid:hryvnia-sign",
	});
}

export default Component;
