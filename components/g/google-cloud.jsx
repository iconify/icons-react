import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8cy_k2ub.css';
import '../../css/v/vqdeeis2p.css';
import '../../css/q/qwdkftlph.css';
import '../../css/y/ydam-vbhp.css';

const viewBox = {"width":256,"height":256,"top":-25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8cy_k2ub"/><path class="vqdeeis2p"/><path class="qwdkftlph"/><path class="ydam-vbhp"/>`,
		"fallback": "thesvg-color:google-cloud",
	});
}

export default Component;
