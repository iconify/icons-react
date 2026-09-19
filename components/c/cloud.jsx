import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu4qu4p3r.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu4qu4p3r"/>`,
		"fallback": "fa6-solid:cloud",
	});
}

export default Component;
