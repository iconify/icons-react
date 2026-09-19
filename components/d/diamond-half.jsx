import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po701ib8u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po701ib8u"/>`,
		"fallback": "bi:diamond-half",
	});
}

export default Component;
