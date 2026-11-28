import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe5-t3bgs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/h/hm3mo31xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe5-t3bgs secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="hm3mo31xb"/></g>`,
		"fallback": "iconaut:circle-bookmark-duo",
	});
}

export default Component;
