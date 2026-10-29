import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h13pefb2x.css';
import '../../css/s/sliiisb3g.css';
import '../../css/h/hgn-414_h.css';
import '../../css/w/wer_ogb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h13pefb2x"/><path class="sliiisb3g wm-shadow"/><path class="hgn-414_h"/><path class="wer_ogb9b"/></g>`,
		"fallback": "withicons:heart-gift-engrave",
	});
}

export default Component;
