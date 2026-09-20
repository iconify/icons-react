import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1j07bdah.css';
import '../../css/g/gx5-p-h4b.css';
import '../../css/s/skmz1bcba.css';
import '../../css/r/rqprhiboi.css';
import '../../css/e/e9zxpcbcm.css';

const viewBox = {"width":42,"height":42,"left":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1j07bdah"/><path class="gx5-p-h4b"/><path class="skmz1bcba"/><path class="rqprhiboi"/><path class="e9zxpcbcm"/></g>`,
		"fallback": "streamline-stickies-color:face-id-1",
	});
}

export default Component;
