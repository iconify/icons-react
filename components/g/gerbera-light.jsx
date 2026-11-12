import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-llkv2cb.css';
import '../../css/m/m-j3uabvn.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/t/tder15a4e.css';
import '../../css/f/f6pkp8bbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVG29KeZdAd" cx="256" cy="256" r="247.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".853" class="m-j3uabvn"/><stop offset="1" class="kckc1iwlf"/></radialGradient><path fill="url(#SVG29KeZdAd)" class="tder15a4e"/><path class="f6pkp8bbl"/>`,
		"fallback": "selfhst:gerbera-light",
	});
}

export default Component;
