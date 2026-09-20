import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd9m3dh5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd9m3dh5w"/>`,
		"fallback": "mdi:arrange-send-backward",
	});
}

export default Component;
