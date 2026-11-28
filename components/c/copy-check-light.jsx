import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu7nbqy7m.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu7nbqy7m"/>`,
		"fallback": "pullo:copy-check-light",
	});
}

export default Component;
