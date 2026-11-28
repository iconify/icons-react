import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kr6b9yb6z.css';
import '../../css/y/ykyh8ybxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kr6b9yb6z"/><path class="ykyh8ybxw"/></g>`,
		"fallback": "iconaut:braces-duo",
	});
}

export default Component;
