import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mae_raf5q.css';
import '../../css/j/jalfqco1n.css';
import '../../css/u/ul1az84lu.css';
import '../../css/n/nce-a_bys.css';
import '../../css/i/i9cg2rj9b.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/h/hl1gxsb1a.css';
import '../../css/f/f-l8bxkjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mae_raf5q wm-k"/><path class="jalfqco1n wm-a"/><path class="ul1az84lu wm-s"/><path class="nce-a_bys wm-shadow"/><path class="i9cg2rj9b wm-k"/><path class="wm-a ykqnlnbbe"/><path class="hl1gxsb1a wm-s"/><path class="f-l8bxkjq wm-s"/></g>`,
		"fallback": "withicons:calendar-clock-engrave",
	});
}

export default Component;
