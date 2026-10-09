import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4s-jblr.css';
import '../../css/c/c7rnb2klb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4s-jblr"/><path class="c7rnb2klb"/>`,
		"fallback": "energy-icons:electricity-bill-48-bold",
	});
}

export default Component;
