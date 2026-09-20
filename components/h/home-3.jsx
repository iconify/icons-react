import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c50pgwbgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c50pgwbgc"/>`,
		"fallback": "subway:home-3",
	});
}

export default Component;
