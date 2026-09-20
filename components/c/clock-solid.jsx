import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd9hy5b_u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd9hy5b_u"/>`,
		"fallback": "rivet-icons:clock-solid",
	});
}

export default Component;
