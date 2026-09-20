import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb7wkv_1h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb7wkv_1h"/>`,
		"fallback": "osmic:castle-stately-14",
	});
}

export default Component;
