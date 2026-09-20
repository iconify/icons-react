import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w94x2zbgg.css';
import '../../css/o/o4lvc6bil.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w94x2zbgg"/><path class="o4lvc6bil"/></g>`,
		"fallback": "streamline-color:hang-up-1",
	});
}

export default Component;
