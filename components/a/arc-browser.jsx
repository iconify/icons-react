import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt7cz-bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt7cz-bps"/>`,
		"fallback": "bxl:arc-browser",
	});
}

export default Component;
