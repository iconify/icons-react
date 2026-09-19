import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9b_1cblb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9b_1cblb"/>`,
		"fallback": "at-icons:handset",
	});
}

export default Component;
