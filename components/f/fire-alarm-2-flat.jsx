import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlo1_gb6y.css';
import '../../css/m/mgbv4jbun.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hlo1_gb6y"/><path clip-rule="evenodd" class="mgbv4jbun"/></g>`,
		"fallback": "streamline-color:fire-alarm-2-flat",
	});
}

export default Component;
