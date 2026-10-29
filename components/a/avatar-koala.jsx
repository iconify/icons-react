import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vr6g4wbir.css';
import '../../css/m/m234ctbtt.css';
import '../../css/h/h09nenbba.css';
import '../../css/w/wub90lb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vr6g4wbir"/><path class="m234ctbtt"/><path class="h09nenbba"/><path class="wub90lb0o"/></g>`,
		"fallback": "withicons-bauhaus:avatar-koala",
	});
}

export default Component;
