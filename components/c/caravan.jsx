import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nvnxxlsue.css';
import '../../css/d/d7dea4fys.css';
import '../../css/m/mszde04rh.css';
import '../../css/e/ew6gvneji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nvnxxlsue"/><path class="d7dea4fys"/><path class="mszde04rh"/><path class="ew6gvneji"/></g>`,
		"fallback": "iconaut:caravan",
	});
}

export default Component;
