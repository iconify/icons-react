import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceatd5b9s.css';
import '../../css/w/w6jecwb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceatd5b9s"/><path class="w6jecwb2y"/>`,
		"fallback": "eva:done-all-outline",
	});
}

export default Component;
