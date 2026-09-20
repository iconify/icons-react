import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4_s0eafu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4_s0eafu"/>`,
		"fallback": "radix-icons:exclamation-mark",
	});
}

export default Component;
