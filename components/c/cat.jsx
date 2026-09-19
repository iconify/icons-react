import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6okdybvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6okdybvr"/>`,
		"fallback": "at-icons:cat",
	});
}

export default Component;
