import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl1kiouvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl1kiouvj"/>`,
		"fallback": "tabler:columns-2-filled",
	});
}

export default Component;
