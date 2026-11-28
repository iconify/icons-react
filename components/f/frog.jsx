import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2hzo5b3k.css';
import '../../css/a/a4ypgybdv.css';
import '../../css/h/hfdwwi98u.css';
import '../../css/l/ly44mob4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a2hzo5b3k"/><path class="a4ypgybdv"/><path class="hfdwwi98u"/><path class="ly44mob4g"/></g>`,
		"fallback": "iconaut:frog",
	});
}

export default Component;
