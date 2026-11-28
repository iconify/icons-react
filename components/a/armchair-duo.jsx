import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9sk95bmy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jwtrj3ybq.css';
import '../../css/p/ppn14wb1e.css';
import '../../css/d/debbmob7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9sk95bmy secondary"/><g class="dt0cm9dhy primary"><path class="jwtrj3ybq"/><path class="ppn14wb1e"/><path class="debbmob7b"/></g>`,
		"fallback": "iconaut:armchair-duo",
	});
}

export default Component;
