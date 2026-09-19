import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chqo5l8nk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chqo5l8nk"/>`,
		"fallback": "dashicons:bell",
	});
}

export default Component;
