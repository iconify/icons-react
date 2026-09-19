import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt-_c9tsx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt-_c9tsx"/>`,
		"fallback": "fa7-regular:envelope",
	});
}

export default Component;
