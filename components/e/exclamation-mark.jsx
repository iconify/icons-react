import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn0v2sb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn0v2sb5k"/>`,
		"fallback": "guidance:exclamation-mark",
	});
}

export default Component;
