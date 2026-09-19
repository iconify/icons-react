import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms-oo7b_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms-oo7b_h"/>`,
		"fallback": "bi:arrow-up-left",
	});
}

export default Component;
