import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roqfgvw3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roqfgvw3v"/>`,
		"fallback": "bi:hearts",
	});
}

export default Component;
