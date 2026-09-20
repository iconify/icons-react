import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt-f31bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt-f31bml"/>`,
		"fallback": "mdi:instrument-triangle",
	});
}

export default Component;
