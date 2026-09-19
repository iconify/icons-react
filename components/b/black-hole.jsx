import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_uftmr9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_uftmr9l"/>`,
		"fallback": "at-icons:black-hole",
	});
}

export default Component;
