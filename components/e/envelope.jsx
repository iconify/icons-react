import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks644wben.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks644wben"/>`,
		"fallback": "whh:envelope",
	});
}

export default Component;
