import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/txf_xf5pi.css';
import '../../css/m/myy3teiet.css';
import '../../css/w/wpnykd7ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="txf_xf5pi"/><path class="myy3teiet"/><path class="wpnykd7ac"/></g>`,
		"fallback": "iconaut:cloud-lightning-rain",
	});
}

export default Component;
