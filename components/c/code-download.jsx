import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxlicvb1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxlicvb1o"/>`,
		"fallback": "ion:code-download",
	});
}

export default Component;
