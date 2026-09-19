import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9ifqu2ej.css';
import '../../css/y/yh79mabjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9ifqu2ej"/><path class="yh79mabjc"/>`,
		"fallback": "boxicons:archive-arrow-down",
	});
}

export default Component;
