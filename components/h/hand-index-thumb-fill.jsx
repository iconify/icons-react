import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itiypswdr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itiypswdr"/>`,
		"fallback": "bi:hand-index-thumb-fill",
	});
}

export default Component;
