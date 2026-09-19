import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k536ld22v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k536ld22v"/>`,
		"fallback": "fa-solid:faucet",
	});
}

export default Component;
