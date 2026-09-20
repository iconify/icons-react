import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz4_n_nrk.css';
import '../../css/i/ipw0oib4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz4_n_nrk"/><path class="ipw0oib4v"/>`,
		"fallback": "selfhst:fava-light",
	});
}

export default Component;
