import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nzqc28bzy.css';
import '../../css/d/d8m5d21rd.css';
import '../../css/l/lq_cp1bfu.css';
import '../../css/d/dp9ap3b7v.css';
import '../../css/y/ywgqm0b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nzqc28bzy"/><path class="d8m5d21rd wm-a"/><path class="lq_cp1bfu"/><path class="dp9ap3b7v"/><path class="wm-a ywgqm0b7b"/></g>`,
		"fallback": "withicons:dhak-duo",
	});
}

export default Component;
