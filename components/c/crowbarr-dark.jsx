import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqqafpd3i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqqafpd3i"/>`,
		"fallback": "selfhst:crowbarr-dark",
	});
}

export default Component;
