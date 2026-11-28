import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwtagwbdh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/w/wtyuahvfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vwtagwbdh"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="wtyuahvfk"/></g>`,
		"fallback": "iconaut:circle-star-duo",
	});
}

export default Component;
