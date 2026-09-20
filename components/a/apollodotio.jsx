import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3bayrqp.css';
import '../../css/c/cuh4qccmh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="pd3bayrqp"/><path class="cuh4qccmh"/></g>`,
		"fallback": "thesvg-color:apollodotio",
	});
}

export default Component;
