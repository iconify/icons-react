import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-kfe4brt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-kfe4brt"/>`,
		"fallback": "raphael:arrowup",
	});
}

export default Component;
