import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or5jkcb5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or5jkcb5u"/>`,
		"fallback": "at-icons:arrow-projectile",
	});
}

export default Component;
