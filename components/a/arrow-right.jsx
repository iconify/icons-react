import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp_xqfbuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp_xqfbuy"/>`,
		"fallback": "ix:arrow-right",
	});
}

export default Component;
