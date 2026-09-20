import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl7_itbah.css';
import '../../css/i/i8zs08y5g.css';
import '../../css/e/es2jbccom.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl7_itbah"/><path class="i8zs08y5g"/><path class="es2jbccom"/>`,
		"fallback": "openmoji:black-hexagon",
	});
}

export default Component;
