import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5zmkz2sw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5zmkz2sw"/>`,
		"fallback": "selfhst:eigenfocus-dark",
	});
}

export default Component;
