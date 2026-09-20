import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptfaom9hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptfaom9hp"/>`,
		"fallback": "mdi:code-tags-check",
	});
}

export default Component;
