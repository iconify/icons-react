import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j33jp_drd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j33jp_drd"/>`,
		"fallback": "pullo:dumpster-light",
	});
}

export default Component;
