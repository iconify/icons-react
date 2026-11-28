import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ipj0aue-n.css';
import '../../css/q/qav6prqhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ipj0aue-n"/><path class="qav6prqhw"/></g>`,
		"fallback": "iconaut:equal-duo",
	});
}

export default Component;
