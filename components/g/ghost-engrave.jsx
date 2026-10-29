import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6mao9fbj.css';
import '../../css/i/i17foxbcg.css';
import '../../css/q/qi9le-b2c.css';
import '../../css/q/qv7s7bn6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f6mao9fbj wm-k"/><path class="i17foxbcg wm-shadow"/><path class="qi9le-b2c wm-k"/><path class="qv7s7bn6a wm-a"/></g>`,
		"fallback": "withicons:ghost-engrave",
	});
}

export default Component;
