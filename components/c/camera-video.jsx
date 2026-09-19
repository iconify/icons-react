import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fddr3lq1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fddr3lq1g"/>`,
		"fallback": "iconamoon:camera-video",
	});
}

export default Component;
