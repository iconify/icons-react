import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auorgab-l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/l/lavl0lbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auorgab-l secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="lavl0lbcq"/></g>`,
		"fallback": "iconaut:circle-dot-duo",
	});
}

export default Component;
