import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/byi0xnwub.css';
import '../../css/d/d-svysbuz.css';
import '../../css/n/nfn_378wm.css';
import '../../css/x/xb-lwab4t.css';
import '../../css/s/s9l91xv6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="byi0xnwub wm-shadow"/><path class="d-svysbuz"/><path class="nfn_378wm"/><path class="xb-lwab4t"/><path class="s9l91xv6t"/></g>`,
		"fallback": "withicons-retro:dumpling",
	});
}

export default Component;
