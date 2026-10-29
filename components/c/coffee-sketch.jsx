import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tyqgt9b1c.css';
import '../../css/p/pue4fnbwj.css';
import '../../css/m/mc70u-h4x.css';
import '../../css/w/wtj99vbvi.css';
import '../../css/x/xn284ibso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tyqgt9b1c"/><path class="pue4fnbwj wm-k"/><path class="mc70u-h4x wm-a"/><path class="wm-k wtj99vbvi"/><path class="wm-a xn284ibso"/></g>`,
		"fallback": "withicons:coffee-sketch",
	});
}

export default Component;
