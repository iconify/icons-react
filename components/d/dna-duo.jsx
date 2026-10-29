import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iuqi_ob4x.css';
import '../../css/w/wrkbx9bny.css';
import '../../css/x/x4522uhjs.css';
import '../../css/n/nk-54lbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="iuqi_ob4x"/><path class="wm-a wrkbx9bny"/><path class="x4522uhjs"/><path class="nk-54lbig"/></g>`,
		"fallback": "withicons:dna-duo",
	});
}

export default Component;
