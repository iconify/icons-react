import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1r2utbur.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b6ra2rkgs.css';
import '../../css/h/hyfvbjbmz.css';
import '../../css/x/xh7fozb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1r2utbur secondary"/><g class="dt0cm9dhy primary"><path class="b6ra2rkgs"/><path class="hyfvbjbmz"/><path class="xh7fozb3j"/></g>`,
		"fallback": "iconaut:burger-duo",
	});
}

export default Component;
