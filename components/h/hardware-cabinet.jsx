import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0jkzi04p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0jkzi04p"/>`,
		"fallback": "ix:hardware-cabinet",
	});
}

export default Component;
