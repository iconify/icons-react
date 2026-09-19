import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln4fjcylo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln4fjcylo"/>`,
		"fallback": "fa7-solid:anchor-lock",
	});
}

export default Component;
