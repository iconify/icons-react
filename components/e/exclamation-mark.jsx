import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/agbvr_v4o.css';
import '../../css/f/fril7wbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="agbvr_v4o"/><path class="fril7wbqw"/></g>`,
		"fallback": "iconaut:exclamation-mark",
	});
}

export default Component;
