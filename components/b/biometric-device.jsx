import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cld7pcy1f.css';
import '../../css/k/kp9iieb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cld7pcy1f"/><path class="kp9iieb2y"/></g>`,
		"fallback": "hugeicons:biometric-device",
	});
}

export default Component;
