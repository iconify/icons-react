import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiclth24j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiclth24j"/>`,
		"fallback": "mdi:download-circle",
	});
}

export default Component;
