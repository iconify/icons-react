import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6j1x8b6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6j1x8b6f"/>`,
		"fallback": "fa-brands:facebook",
	});
}

export default Component;
