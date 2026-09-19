import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbdd1a27x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wbdd1a27x"/>`,
		"fallback": "iconamoon:camera-video-fill",
	});
}

export default Component;
