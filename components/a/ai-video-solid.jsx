import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv-4_-bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv-4_-bsd"/>`,
		"fallback": "iconaut:ai-video-solid",
	});
}

export default Component;
