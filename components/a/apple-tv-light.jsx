import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8-j1zyzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8-j1zyzn"/>`,
		"fallback": "selfhst:apple-tv-light",
	});
}

export default Component;
