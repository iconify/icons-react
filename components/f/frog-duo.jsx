import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d89ad6eqx.css';
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
		"content": `<path class="d89ad6eqx secondary"/><g class="dt0cm9dhy primary"><path class="a2hzo5b3k"/><path class="a4ypgybdv"/><path class="hfdwwi98u"/><path class="ly44mob4g"/></g>`,
		"fallback": "iconaut:frog-duo",
	});
}

export default Component;
