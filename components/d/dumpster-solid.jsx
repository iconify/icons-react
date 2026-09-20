import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmn4a1b8k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmn4a1b8k"/>`,
		"fallback": "la:dumpster-solid",
	});
}

export default Component;
