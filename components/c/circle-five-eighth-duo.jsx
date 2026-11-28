import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b11j3lbjo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/t/taz1di9se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b11j3lbjo secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="taz1di9se"/></g>`,
		"fallback": "iconaut:circle-five-eighth-duo",
	});
}

export default Component;
