import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwz24hlco.css';
import '../../css/q/qu_vbrbhy.css';
import '../../css/q/q9rae6tyk.css';
import '../../css/d/dc-o_gbeo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rwz24hlco"/><path class="qu_vbrbhy"/><path class="q9rae6tyk"/><path clip-rule="evenodd" class="dc-o_gbeo"/></g>`,
		"fallback": "streamline-color:bill-1-flat",
	});
}

export default Component;
