import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7jx4s0fj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7jx4s0fj"/>`,
		"fallback": "bi:filetype-mdx",
	});
}

export default Component;
