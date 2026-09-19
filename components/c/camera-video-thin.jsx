import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi1628bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi1628bkd"/>`,
		"fallback": "iconamoon:camera-video-thin",
	});
}

export default Component;
