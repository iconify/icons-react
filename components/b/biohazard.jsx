import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2x0b7bwy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2x0b7bwy"/>`,
		"fallback": "fa6-solid:biohazard",
	});
}

export default Component;
