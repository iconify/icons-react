import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxww0ab5s.css';
import '../../css/u/ubwtmclzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxww0ab5s"/><path class="ubwtmclzi"/></g>`,
		"fallback": "si:copy-duotone",
	});
}

export default Component;
