import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn-43ri1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn-43ri1u"/>`,
		"fallback": "heroicons:building-storefront-16-solid",
	});
}

export default Component;
