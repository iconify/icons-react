import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_cj-5b1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_cj-5b1u"/>`,
		"fallback": "ion:arrow-up-left-box-outline",
	});
}

export default Component;
