import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_kl1j4-d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/z/z0iipph7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary y_kl1j4-d"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="z0iipph7v"/></g>`,
		"fallback": "iconaut:circle-zap-duo",
	});
}

export default Component;
