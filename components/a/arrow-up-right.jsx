import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5o5j3omz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5o5j3omz"/>`,
		"fallback": "rivet-icons:arrow-up-right",
	});
}

export default Component;
