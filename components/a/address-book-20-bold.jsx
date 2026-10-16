import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2linuthc.css';
import '../../css/p/p4elc_bfg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2linuthc"/><path class="p4elc_bfg"/>`,
		"fallback": "energy-icons:address-book-20-bold",
	});
}

export default Component;
