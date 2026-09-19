import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cr8_bgb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_cr8_bgb"/>`,
		"fallback": "bi:diamond-fill",
	});
}

export default Component;
