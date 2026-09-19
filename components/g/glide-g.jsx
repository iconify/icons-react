import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew63x3ajk.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew63x3ajk"/>`,
		"fallback": "fa6-brands:glide-g",
	});
}

export default Component;
