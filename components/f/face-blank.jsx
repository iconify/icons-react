import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w55oivbfr.css';
import '../../css/z/ze92cpb2t.css';
import '../../css/g/g4u2w0w3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="w55oivbfr"/><circle transform="rotate(90 12 12)" class="ze92cpb2t"/><path class="g4u2w0w3e"/></g>`,
		"fallback": "andrsrxn:face-blank",
	});
}

export default Component;
