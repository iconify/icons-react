import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fni4lzbcb.css';
import '../../css/w/whf6q0-lx.css';
import '../../css/j/jjctyybcj.css';
import '../../css/k/kzz2abcpr.css';
import '../../css/k/kkpnesg6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fni4lzbcb"><path class="whf6q0-lx wm-shadow"/><path class="jjctyybcj wm-a"/><path class="kzz2abcpr wm-shadow"/><path class="kkpnesg6t wm-k"/></g>`,
		"fallback": "withicons-brutal:copy",
	});
}

export default Component;
