import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxna7-bqs.css';
import '../../css/e/edbk4g8dt.css';
import '../../css/x/xoc_r0_3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxna7-bqs"/><path class="edbk4g8dt"/><path class="xoc_r0_3a"/>`,
		"fallback": "solar:gamepad-minimalistic-outline",
	});
}

export default Component;
