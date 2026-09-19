import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf3_fw_kp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf3_fw_kp"/>`,
		"fallback": "carbon:3d-curve-auto-colon",
	});
}

export default Component;
