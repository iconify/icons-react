import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w52fp8bxl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w52fp8bxl"/>`,
		"fallback": "file-icons:galen",
	});
}

export default Component;
