import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkck_91nn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i-ikzyb4j.css';
import '../../css/o/ox7v1pb2u.css';
import '../../css/q/q7r63ij4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkck_91nn secondary"/><g class="dt0cm9dhy primary"><path class="i-ikzyb4j"/><path class="ox7v1pb2u"/><path class="q7r63ij4m"/></g>`,
		"fallback": "iconaut:briefcase-duo",
	});
}

export default Component;
