import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/ztdmoqbvc.css';
import '../../css/q/qj10p8mvv.css';
import '../../css/u/ukw3xqbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ztdmoqbvc"/><path class="qj10p8mvv wm-a"/><path class="ukw3xqbut"/></g>`,
		"fallback": "withicons:bath-duo",
	});
}

export default Component;
