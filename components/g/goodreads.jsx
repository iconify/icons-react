import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kblqc7b2s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kblqc7b2s"/>`,
		"fallback": "fa6-brands:goodreads",
	});
}

export default Component;
