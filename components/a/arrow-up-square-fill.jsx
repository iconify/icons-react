import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4rob80ci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4rob80ci"/>`,
		"fallback": "bi:arrow-up-square-fill",
	});
}

export default Component;
