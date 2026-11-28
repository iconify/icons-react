import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqsrefbbc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vtpmdroha.css';
import '../../css/e/e_0oumv9u.css';
import '../../css/q/qmqxyprqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqsrefbbc secondary"/><g class="dt0cm9dhy primary"><path class="vtpmdroha"/><path class="e_0oumv9u"/><path class="qmqxyprqi"/></g>`,
		"fallback": "iconaut:hammer-duo",
	});
}

export default Component;
