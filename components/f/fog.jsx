import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edqny3bwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edqny3bwh"/>`,
		"fallback": "at-icons:fog",
	});
}

export default Component;
