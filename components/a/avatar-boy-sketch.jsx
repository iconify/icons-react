import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nco5g-rav.css';
import '../../css/y/ymnvc_coe.css';
import '../../css/s/sz8giyy7i.css';
import '../../css/r/ri7rjxmdv.css';
import '../../css/o/or5qoybza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nco5g-rav wm-k"/><path class="wm-k ymnvc_coe"/><path class="sz8giyy7i wm-k"/><path class="ri7rjxmdv wm-k"/><path class="or5qoybza wm-k"/></g>`,
		"fallback": "withicons:avatar-boy-sketch",
	});
}

export default Component;
