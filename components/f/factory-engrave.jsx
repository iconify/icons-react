import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p12_aet5g.css';
import '../../css/k/ks110b_an.css';
import '../../css/z/z31jlbbvb.css';
import '../../css/n/ngj96acjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p12_aet5g wm-k"/><path class="ks110b_an wm-shadow"/><path class="wm-k z31jlbbvb"/><path class="ngj96acjh wm-a"/></g>`,
		"fallback": "withicons:factory-engrave",
	});
}

export default Component;
