import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqom6bjey.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqom6bjey"/>`,
		"fallback": "fa6-brands:goodreads-g",
	});
}

export default Component;
