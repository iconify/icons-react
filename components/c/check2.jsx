import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1s-4pk-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1s-4pk-x"/>`,
		"fallback": "bi:check2",
	});
}

export default Component;
