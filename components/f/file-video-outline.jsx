import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgfo8_bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgfo8_bho"/>`,
		"fallback": "mdi:file-video-outline",
	});
}

export default Component;
