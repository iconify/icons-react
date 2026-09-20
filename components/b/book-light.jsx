import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sdrauacav.css';
import '../../css/q/qtzbrdlmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="sdrauacav"/><path class="qtzbrdlmb"/></g>`,
		"fallback": "lets-icons:book-light",
	});
}

export default Component;
