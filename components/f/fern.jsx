import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/awk-gs1rj.css';
import '../../css/a/acbw8blce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="awk-gs1rj"/><path class="acbw8blce"/></g>`,
		"fallback": "iconaut:fern",
	});
}

export default Component;
