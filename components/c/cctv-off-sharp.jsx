import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt6y7e71h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt6y7e71h"/>`,
		"fallback": "keyline-icons:cctv-off-sharp",
	});
}

export default Component;
