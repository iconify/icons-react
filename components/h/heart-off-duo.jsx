import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea5taoauh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ymq-jv4ji.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea5taoauh secondary"/><g class="dt0cm9dhy primary"><path class="ymq-jv4ji"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:heart-off-duo",
	});
}

export default Component;
