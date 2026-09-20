import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mymg3bbwx.css';
import '../../css/d/dzlke_9oz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mymg3bbwx"/><path clip-rule="evenodd" class="dzlke_9oz"/></g>`,
		"fallback": "streamline-color:home-3-flat",
	});
}

export default Component;
