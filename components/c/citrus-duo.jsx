import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-gk01bni.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cqp1zj20f.css';
import '../../css/g/ghgl7wbcz.css';
import '../../css/y/yoox92wcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-gk01bni secondary"/><g class="dt0cm9dhy primary"><path class="cqp1zj20f"/><path class="ghgl7wbcz"/><path class="yoox92wcb"/></g>`,
		"fallback": "iconaut:citrus-duo",
	});
}

export default Component;
