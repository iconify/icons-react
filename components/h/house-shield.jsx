import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4tj3i45c.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/u/u86dx90hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f4tj3i45c"/><path class="gsvrl7yuk"/><path class="u86dx90hu"/></g>`,
		"fallback": "andrsrxn:house-shield",
	});
}

export default Component;
