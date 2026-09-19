import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zunjoqu6e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zunjoqu6e"/>`,
		"fallback": "bi:filetype-exe",
	});
}

export default Component;
