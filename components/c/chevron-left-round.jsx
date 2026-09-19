import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-pi-2n5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-pi-2n5e"/>`,
		"fallback": "icons8:chevron-left-round",
	});
}

export default Component;
