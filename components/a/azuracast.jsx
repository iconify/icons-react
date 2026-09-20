import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxx0x7b3s.css';
import '../../css/v/vxtv2ib2g.css';
import '../../css/k/kki5737ji.css';
import '../../css/z/zn3hig6gl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGPgiqcdWK" x1="58.934" x2="455.76" y1="255.569" y2="255.569" gradientUnits="userSpaceOnUse"><stop offset="0" class="zxx0x7b3s"/><stop offset="1" class="zxx0x7b3s"/></linearGradient><path fill="url(#SVGPgiqcdWK)" class="vxtv2ib2g"/><path class="kki5737ji"/><path class="zn3hig6gl"/>`,
		"fallback": "selfhst:azuracast",
	});
}

export default Component;
