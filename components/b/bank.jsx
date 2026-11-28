import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yh9vutbpe.css';
import '../../css/r/r4h8hkbqs.css';
import '../../css/u/u2qvwgb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yh9vutbpe"/><path class="r4h8hkbqs"/><path class="u2qvwgb3m"/></g>`,
		"fallback": "iconaut:bank",
	});
}

export default Component;
