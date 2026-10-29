import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ku_lujd1a.css';
import '../../css/f/fzvhi0bnt.css';
import '../../css/m/mav1hqb9l.css';
import '../../css/g/g5u9bib3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ku_lujd1a wm-k"/><path class="fzvhi0bnt wm-k"/><path class="mav1hqb9l wm-k"/><path class="g5u9bib3y wm-shine"/></g>`,
		"fallback": "withicons-anime:drag-handle",
	});
}

export default Component;
