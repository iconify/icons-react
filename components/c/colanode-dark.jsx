import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqn0z4bic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqn0z4bic"/>`,
		"fallback": "selfhst:colanode-dark",
	});
}

export default Component;
