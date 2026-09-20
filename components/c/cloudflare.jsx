import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv53j552d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv53j552d"/>`,
		"fallback": "thesvg:cloudflare",
	});
}

export default Component;
