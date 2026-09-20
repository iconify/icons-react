import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6fqr2b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6fqr2b3v"/>`,
		"fallback": "keyline-icons:cursor-signal-sharp",
	});
}

export default Component;
