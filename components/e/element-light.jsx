import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj1oo60oz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj1oo60oz"/>`,
		"fallback": "selfhst:element-light",
	});
}

export default Component;
