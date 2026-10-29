import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vbedhib0q.css';
import '../../css/e/ep3o2ubpc.css';
import '../../css/x/xy3kxv0cu.css';
import '../../css/v/vlroo4bwv.css';
import '../../css/k/kjftorklk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vbedhib0q wm-k"/><path class="ep3o2ubpc wm-a"/><path class="wm-shadow xy3kxv0cu"/><path class="vlroo4bwv wm-k"/><path class="kjftorklk wm-a"/></g>`,
		"fallback": "withicons:fuel-engrave",
	});
}

export default Component;
