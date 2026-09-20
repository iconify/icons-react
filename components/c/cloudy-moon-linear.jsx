import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jsjdmfbxw.css';
import '../../css/k/kros7mbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jsjdmfbxw"/><path class="kros7mbvb"/></g>`,
		"fallback": "solar:cloudy-moon-linear",
	});
}

export default Component;
