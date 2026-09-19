import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m420mflov.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m420mflov"/>`,
		"fallback": "zmdi:check-square",
	});
}

export default Component;
