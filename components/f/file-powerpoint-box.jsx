import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1c1x8bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1c1x8bar"/>`,
		"fallback": "mdi:file-powerpoint-box",
	});
}

export default Component;
