import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zijpg8o5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zijpg8o5u"/>`,
		"fallback": "fa6-brands:diaspora",
	});
}

export default Component;
