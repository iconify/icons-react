import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa4-7mbfv.css';
import '../../css/p/piuz0fbpu.css';
import '../../css/k/k2hdxcbmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa4-7mbfv"/><path class="piuz0fbpu"/><path class="k2hdxcbmm"/>`,
		"fallback": "selfhst:casaos",
	});
}

export default Component;
