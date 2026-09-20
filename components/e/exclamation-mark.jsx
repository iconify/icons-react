import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnfa8zd7c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnfa8zd7c"/>`,
		"fallback": "rivet-icons:exclamation-mark",
	});
}

export default Component;
