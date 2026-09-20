import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y07f4d6oh.css';
import '../../css/v/vtce3bqtj.css';
import '../../css/p/p3xxbml3s.css';
import '../../css/g/gvjge2eeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y07f4d6oh"/><path class="vtce3bqtj"/><path class="p3xxbml3s"/><path class="gvjge2eeq"/></g>`,
		"fallback": "streamline-ultimate-color:car-dashboard-window-rear",
	});
}

export default Component;
