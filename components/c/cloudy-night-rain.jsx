import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoee4ju2s.css';
import '../../css/y/y1px0qbgg.css';
import '../../css/p/p2i45mb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uoee4ju2s"/><path class="y1px0qbgg"/><path class="p2i45mb4b"/></g>`,
		"fallback": "tdesign:cloudy-night-rain",
	});
}

export default Component;
