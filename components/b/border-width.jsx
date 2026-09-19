import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3-krgg1o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3-krgg1o"/>`,
		"fallback": "bi:border-width",
	});
}

export default Component;
