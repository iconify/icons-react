import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6sj6mbqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6sj6mbqo"/>`,
		"fallback": "at-icons:bookmark",
	});
}

export default Component;
