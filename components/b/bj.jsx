import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elzqj11ly.css';
import '../../css/m/m98ufjkoe.css';
import '../../css/a/afagjbcat.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="elzqj11ly"/><path class="m98ufjkoe"/><path class="afagjbcat"/></g>`,
		"fallback": "cif:bj",
	});
}

export default Component;
