import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq2le3bll.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hwr7riwkr.css';
import '../../css/l/l87c0nb7d.css';
import '../../css/r/r851mssgl.css';
import '../../css/l/lcx6pvbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wq2le3bll"/><g class="dt0cm9dhy primary"><path class="hwr7riwkr"/><path class="l87c0nb7d"/><path class="r851mssgl"/><path class="lcx6pvbtq"/></g>`,
		"fallback": "iconaut:grab-duo",
	});
}

export default Component;
