import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/w/wcp-sn0ko.css';
import '../../css/m/mhcfrxbsn.css';
import '../../css/l/lyp8b3m-b.css';
import '../../css/d/daj_occca.css';
import '../../css/d/dgr-wbcdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="wcp-sn0ko"/><path class="mhcfrxbsn"/><path class="lyp8b3m-b"/><path class="daj_occca"/><path class="dgr-wbcdb"/></g>`,
		"fallback": "withicons-retro:grid-2x2",
	});
}

export default Component;
