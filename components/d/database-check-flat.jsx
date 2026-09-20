import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pv-c8jpbw.css';
import '../../css/x/xz8cmjvbt.css';
import '../../css/u/uevo4sbur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pv-c8jpbw"/><path clip-rule="evenodd" class="xz8cmjvbt"/><path class="uevo4sbur"/></g>`,
		"fallback": "streamline-color:database-check-flat",
	});
}

export default Component;
