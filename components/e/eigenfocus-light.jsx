import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1th6cc6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1th6cc6h"/>`,
		"fallback": "selfhst:eigenfocus-light",
	});
}

export default Component;
