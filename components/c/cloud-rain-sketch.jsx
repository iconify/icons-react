import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y7u8bnbya.css';
import '../../css/y/ytq3-rb7s.css';
import '../../css/k/k1axlacgx.css';
import '../../css/e/ene1tmkdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y7u8bnbya"/><path class="wm-a ytq3-rb7s"/><path class="k1axlacgx wm-k"/><path class="ene1tmkdl wm-a"/></g>`,
		"fallback": "withicons:cloud-rain-sketch",
	});
}

export default Component;
