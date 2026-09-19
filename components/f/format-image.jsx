import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz0w79bsm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz0w79bsm"/>`,
		"fallback": "dashicons:format-image",
	});
}

export default Component;
