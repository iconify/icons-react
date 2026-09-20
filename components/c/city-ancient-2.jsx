import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm2b6wbjv.css';
import '../../css/g/greayko6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jm2b6wbjv"/><path class="greayko6g"/></g>`,
		"fallback": "tdesign:city-ancient-2",
	});
}

export default Component;
