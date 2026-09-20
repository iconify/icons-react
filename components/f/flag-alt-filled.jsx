import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi31sik8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi31sik8a"/>`,
		"fallback": "ix:flag-alt-filled",
	});
}

export default Component;
