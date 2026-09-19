import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdt6c6bja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdt6c6bja"/>`,
		"fallback": "at-icons:gift",
	});
}

export default Component;
