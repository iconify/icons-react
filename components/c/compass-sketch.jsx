import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hpb1aw6wk.css';
import '../../css/u/udv9a5ayb.css';
import '../../css/a/av4380b0t.css';
import '../../css/y/yeorqghpo.css';
import '../../css/g/g8hg9gbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hpb1aw6wk wm-a"/><path class="udv9a5ayb wm-k"/><path class="av4380b0t wm-k"/><path class="wm-a yeorqghpo"/><circle class="g8hg9gbmt wm-a"/></g>`,
		"fallback": "withicons:compass-sketch",
	});
}

export default Component;
