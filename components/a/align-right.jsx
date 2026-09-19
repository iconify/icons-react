import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ketm56k_r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ketm56k_r"/>`,
		"fallback": "fa7-solid:align-right",
	});
}

export default Component;
