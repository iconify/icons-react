import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k3k-_vkxl.css';
import '../../css/k/kmgkpdb0r.css';
import '../../css/p/pfitmhbyp.css';
import '../../css/r/rk_aglbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k3k-_vkxl"/><path class="kmgkpdb0r wm-a"/><path class="pfitmhbyp wm-k"/><path class="rk_aglbyi wm-a"/></g>`,
		"fallback": "withicons:briefcase-sketch",
	});
}

export default Component;
