import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ps5j7mh9x.css';
import '../../css/y/y6jh-0bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ps5j7mh9x"/><path clip-rule="evenodd" class="y6jh-0bel"/></g>`,
		"fallback": "streamline-sharp-color:earth-2-flat",
	});
}

export default Component;
