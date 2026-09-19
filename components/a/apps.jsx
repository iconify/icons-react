import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6j-j1bhe.css';

const viewBox = {"width":480,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6j-j1bhe"/>`,
		"fallback": "ps:apps",
	});
}

export default Component;
