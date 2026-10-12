import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ok1a9w9na.css';
import '../../css/f/fzomxmbxj.css';
import '../../css/d/d5v1rib0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ok1a9w9na"/><path class="fzomxmbxj"/><path class="d5v1rib0v"/></g>`,
		"fallback": "andrsrxn:file-cv",
	});
}

export default Component;
