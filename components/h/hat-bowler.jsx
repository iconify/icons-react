import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j3-7hvbxm.css';
import '../../css/o/oegw8x_4v.css';
import '../../css/o/omyl4l_lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j3-7hvbxm"/><path class="oegw8x_4v"/><path class="omyl4l_lf"/></g>`,
		"fallback": "lucide-lab:hat-bowler",
	});
}

export default Component;
