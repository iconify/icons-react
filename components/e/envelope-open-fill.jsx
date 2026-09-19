import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2ji2r33e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2ji2r33e"/>`,
		"fallback": "bi:envelope-open-fill",
	});
}

export default Component;
