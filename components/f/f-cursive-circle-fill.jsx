import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0j1o-b1z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0j1o-b1z"/>`,
		"fallback": "f7:f-cursive-circle-fill",
	});
}

export default Component;
