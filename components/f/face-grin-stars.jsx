import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipfdw6b6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipfdw6b6t"/>`,
		"fallback": "fa6-solid:face-grin-stars",
	});
}

export default Component;
