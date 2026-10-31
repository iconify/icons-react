import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hk_p5eb7q.css';
import '../../css/i/iyx8f-bpa.css';
import '../../css/l/lh_-7vbqc.css';
import '../../css/c/cbyi9obzv.css';
import '../../css/q/qe6u0hb5y.css';
import '../../css/j/jrzuh-bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hk_p5eb7q wm-shadow"/><path class="iyx8f-bpa"/><path class="lh_-7vbqc"/><path class="cbyi9obzv"/><path class="qe6u0hb5y"/><path class="jrzuh-bne"/></g>`,
		"fallback": "withicons-retro:battery-full",
	});
}

export default Component;
