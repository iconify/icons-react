import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqag7l0gr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqag7l0gr"/>`,
		"fallback": "zondicons:battery-low",
	});
}

export default Component;
