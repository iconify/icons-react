import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ghx2y3b3m.css';
import '../../css/w/wvp2hjbpw.css';
import '../../css/o/oqwpskbbm.css';
import '../../css/j/j-82xe69i.css';
import '../../css/g/g3zxq2omy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ghx2y3b3m wm-shadow"/><path class="wvp2hjbpw"/><path class="oqwpskbbm"/><path class="j-82xe69i"/><path class="g3zxq2omy"/></g>`,
		"fallback": "withicons-retro:cricket",
	});
}

export default Component;
