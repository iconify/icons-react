import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_bz9ul3x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_bz9ul3x"/>`,
		"fallback": "cib:cloudflare",
	});
}

export default Component;
