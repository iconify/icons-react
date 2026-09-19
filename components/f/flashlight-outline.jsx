import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4xkvhbmt.css';
import '../../css/l/l09236icr.css';
import '../../css/q/qfnn6de1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4xkvhbmt"/><circle class="l09236icr"/><path class="qfnn6de1i"/>`,
		"fallback": "ion:flashlight-outline",
	});
}

export default Component;
