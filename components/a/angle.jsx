import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr50xn6_u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr50xn6_u"/>`,
		"fallback": "at-icons:angle",
	});
}

export default Component;
