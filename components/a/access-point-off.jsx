import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsm7hzbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsm7hzbhq"/>`,
		"fallback": "mdi:access-point-off",
	});
}

export default Component;
