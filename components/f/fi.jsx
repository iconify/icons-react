import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-np9ubwg.css';
import '../../css/u/uk8atmnum.css';
import '../../css/g/geqsg-a7g.css';

const viewBox = {"width":301,"height":185};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-np9ubwg"/><path class="uk8atmnum"/><path class="geqsg-a7g"/></g>`,
		"fallback": "cif:fi",
	});
}

export default Component;
