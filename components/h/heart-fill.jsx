import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c294zkb5x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c294zkb5x"/>`,
		"fallback": "lineicons:heart-fill",
	});
}

export default Component;
