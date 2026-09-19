import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq34fv2ns.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq34fv2ns"/>`,
		"fallback": "bi:arrow-through-heart",
	});
}

export default Component;
