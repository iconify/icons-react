import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_4tjt7gm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_4tjt7gm"/>`,
		"fallback": "fa7-brands:etsy",
	});
}

export default Component;
