import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffp8ehbfy.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffp8ehbfy"/>`,
		"fallback": "fa-solid:hand-sparkles",
	});
}

export default Component;
