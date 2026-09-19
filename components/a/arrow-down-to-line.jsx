import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxr-nkffo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxr-nkffo"/>`,
		"fallback": "at-icons:arrow-down-to-line",
	});
}

export default Component;
