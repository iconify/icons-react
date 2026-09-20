import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u41ngwb9e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u41ngwb9e"/>`,
		"fallback": "picon:butterfly",
	});
}

export default Component;
