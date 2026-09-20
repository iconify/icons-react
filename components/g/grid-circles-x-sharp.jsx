import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyc8fwb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyc8fwb2p"/>`,
		"fallback": "keyline-icons:grid-circles-x-sharp",
	});
}

export default Component;
