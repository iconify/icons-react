import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nykq9ej_e.css';
import '../../css/d/dccl6cslv.css';
import '../../css/o/ov6a3cc_j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nykq9ej_e"/><path class="dccl6cslv"/><path class="ov6a3cc_j"/>`,
		"fallback": "ei:eye",
	});
}

export default Component;
