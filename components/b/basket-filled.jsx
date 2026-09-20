import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q93xk0bex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q93xk0bex"/>`,
		"fallback": "lsicon:basket-filled",
	});
}

export default Component;
