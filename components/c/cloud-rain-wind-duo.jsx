import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znclo2baj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1ydfnpwv.css';
import '../../css/v/vn8k770_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary znclo2baj"/><g class="dt0cm9dhy primary"><path class="q1ydfnpwv"/><path class="vn8k770_s"/></g>`,
		"fallback": "iconaut:cloud-rain-wind-duo",
	});
}

export default Component;
