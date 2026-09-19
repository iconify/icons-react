import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj6el_b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj6el_b9o"/>`,
		"fallback": "ion:checkmark-circled",
	});
}

export default Component;
