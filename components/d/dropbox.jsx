import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyi2f1bps.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyi2f1bps"/>`,
		"fallback": "fa7-brands:dropbox",
	});
}

export default Component;
