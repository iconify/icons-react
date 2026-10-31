import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qma3yg2km.css';
import '../../css/i/iwd93nbob.css';
import '../../css/a/a40pwqb_z.css';
import '../../css/e/e7q-pgwti.css';
import '../../css/k/kxoj3_boy.css';
import '../../css/l/lhmgo7gmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qma3yg2km wm-shadow"/><path class="iwd93nbob"/><path class="a40pwqb_z"/><path class="e7q-pgwti"/><path class="kxoj3_boy"/><path class="lhmgo7gmy"/></g>`,
		"fallback": "withicons-retro:door-closed",
	});
}

export default Component;
