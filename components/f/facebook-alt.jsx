import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny9tj592h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny9tj592h"/>`,
		"fallback": "dashicons:facebook-alt",
	});
}

export default Component;
