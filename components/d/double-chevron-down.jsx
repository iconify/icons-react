import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb8kiid1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb8kiid1m"/>`,
		"fallback": "ix:double-chevron-down",
	});
}

export default Component;
