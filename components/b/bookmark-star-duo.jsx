import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb75b-bsh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ss8t1tbbv.css';
import '../../css/b/bu2ngkl5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb75b-bsh secondary"/><g class="dt0cm9dhy primary"><path class="ss8t1tbbv"/><path class="bu2ngkl5m"/></g>`,
		"fallback": "iconaut:bookmark-star-duo",
	});
}

export default Component;
