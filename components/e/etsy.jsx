import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5u_j6n2a.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5u_j6n2a"/>`,
		"fallback": "fa6-brands:etsy",
	});
}

export default Component;
