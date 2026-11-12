import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w183drbez.css';
import '../../css/c/ctrn9rbcn.css';
import '../../css/v/vx8zphb1a.css';
import '../../css/m/m8l6_nb5m.css';
import '../../css/f/fynjxqbnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w183drbez"/><path class="ctrn9rbcn"/><path class="vx8zphb1a"/><path class="m8l6_nb5m"/><path class="fynjxqbnx"/>`,
		"fallback": "selfhst:archiesteamfarm-dark",
	});
}

export default Component;
