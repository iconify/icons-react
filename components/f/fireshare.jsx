import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9687j_oo.css';
import '../../css/j/jtzpz3bxa.css';
import '../../css/q/qewxaumkx.css';
import '../../css/g/g7ov_0ltl.css';
import '../../css/d/dpmmq_k7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG3QnizfsB" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="h9687j_oo"/><stop offset=".36" class="jtzpz3bxa"/><stop offset=".589" class="qewxaumkx"/><stop offset="1" class="g7ov_0ltl"/></linearGradient><path fill="url(#SVG3QnizfsB)" class="dpmmq_k7s"/>`,
		"fallback": "selfhst:fireshare",
	});
}

export default Component;
