import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaa_36bkr.css';
import '../../css/x/xa8hyu6ct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaa_36bkr"/><path class="xa8hyu6ct"/>`,
		"fallback": "selfhst:duckduckgo-dark",
	});
}

export default Component;
