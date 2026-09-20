import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/m/m-j3uabvn.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/y/y5rf2kbmf.css';
import '../../css/m/mj_i40tqf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGPTPJTc2e" cx="255.998" cy="256" r="247.406" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".853" class="m-j3uabvn"/><stop offset="1" class="kckc1iwlf"/></radialGradient><path fill="url(#SVGPTPJTc2e)" class="y5rf2kbmf"/><path class="mj_i40tqf"/>`,
		"fallback": "selfhst:gerbera-light",
	});
}

export default Component;
