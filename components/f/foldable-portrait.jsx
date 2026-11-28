import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ab8846b-o.css';
import '../../css/y/yahd9lb9e.css';
import '../../css/j/j8bxxx5do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ab8846b-o"/><path class="yahd9lb9e"/><path class="j8bxxx5do"/></g>`,
		"fallback": "iconaut:foldable-portrait",
	});
}

export default Component;
