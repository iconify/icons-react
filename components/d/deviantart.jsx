import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3-61p3_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3-61p3_h"/>`,
		"fallback": "mdi:deviantart",
	});
}

export default Component;
