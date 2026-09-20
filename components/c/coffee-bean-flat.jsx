import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jh6zym6wf.css';
import '../../css/i/igdksde-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jh6zym6wf"/><path clip-rule="evenodd" class="igdksde-s"/></g>`,
		"fallback": "streamline-color:coffee-bean-flat",
	});
}

export default Component;
