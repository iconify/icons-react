import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/voy24ybuj.css';
import '../../css/f/fod7kbbzn.css';
import '../../css/h/hbv9b7-7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="voy24ybuj"/><path class="fod7kbbzn"/><path class="hbv9b7-7d"/></g>`,
		"fallback": "lets-icons:book-duotone-line",
	});
}

export default Component;
