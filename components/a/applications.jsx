import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqnnh8bip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqnnh8bip"/>`,
		"fallback": "ix:applications",
	});
}

export default Component;
