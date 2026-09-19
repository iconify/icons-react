import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsex7bczb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsex7bczb"/>`,
		"fallback": "at-icons:bandages",
	});
}

export default Component;
