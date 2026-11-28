import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rkgsmimtt.css';
import '../../css/y/y4oawvb0e.css';
import '../../css/c/c3fmgjbda.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rkgsmimtt"/><path class="y4oawvb0e"/><path class="c3fmgjbda"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:headphones-off",
	});
}

export default Component;
