import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht3kc_b9w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht3kc_b9w"/>`,
		"fallback": "subway:admin",
	});
}

export default Component;
