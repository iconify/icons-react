import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7cqly6iy.css';
import '../../css/r/rvofrtbyf.css';
import '../../css/h/hf94hdb3x.css';
import '../../css/o/ooxq6ibqr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7cqly6iy"/><path clip-rule="evenodd" class="rvofrtbyf"/><path class="hf94hdb3x"/><path class="ooxq6ibqr"/></g>`,
		"fallback": "streamline-color:calculator-1",
	});
}

export default Component;
