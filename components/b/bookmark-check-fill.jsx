import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl1rlvb2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl1rlvb2x"/>`,
		"fallback": "bi:bookmark-check-fill",
	});
}

export default Component;
