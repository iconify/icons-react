import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddghpn2-o.css';
import '../../css/m/mh06cqblr.css';
import '../../css/a/axf4zcygn.css';
import '../../css/v/vbqbujntv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="ddghpn2-o"/><path class="mh06cqblr"/><path class="axf4zcygn"/><path class="vbqbujntv"/></g>`,
		"fallback": "hugeicons:image-down",
	});
}

export default Component;
