import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx6l9tbvt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx6l9tbvt"/>`,
		"fallback": "at-icons:box",
	});
}

export default Component;
