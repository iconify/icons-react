import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuus5rbmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuus5rbmo"/>`,
		"fallback": "ix:full-screeen-exit",
	});
}

export default Component;
