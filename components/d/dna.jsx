import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x4522uhjs.css';
import '../../css/n/nk-54lbig.css';
import '../../css/w/wrkbx9bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x4522uhjs"/><path class="nk-54lbig"/><path class="wm-a wrkbx9bny"/></g>`,
		"fallback": "withicons:dna",
	});
}

export default Component;
