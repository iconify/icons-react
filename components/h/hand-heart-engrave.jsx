import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f7te0h-5d.css';
import '../../css/s/s2esidyro.css';
import '../../css/x/xenxfek_e.css';
import '../../css/n/n2akhfbpl.css';
import '../../css/e/eg_tgsusb.css';
import '../../css/o/og01tokas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f7te0h-5d wm-k"/><path class="s2esidyro wm-a"/><path class="wm-shadow xenxfek_e"/><path class="n2akhfbpl wm-k"/><path class="eg_tgsusb wm-k"/><path class="og01tokas wm-a"/></g>`,
		"fallback": "withicons:hand-heart-engrave",
	});
}

export default Component;
