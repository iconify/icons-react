import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef4c8rz-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef4c8rz-f"/>`,
		"fallback": "selfhst:cloudflare-light",
	});
}

export default Component;
