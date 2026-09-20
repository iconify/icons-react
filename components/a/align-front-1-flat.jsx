import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgzhqqb_m.css';
import '../../css/z/zipn5wars.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fgzhqqb_m"/><path class="zipn5wars"/></g>`,
		"fallback": "streamline-color:align-front-1-flat",
	});
}

export default Component;
