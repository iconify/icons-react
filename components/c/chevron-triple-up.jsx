import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ixactvbks.css';
import '../../css/r/rsml70e1r.css';
import '../../css/q/qggd_up0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ixactvbks"/><path class="rsml70e1r"/><path class="qggd_up0u"/></g>`,
		"fallback": "iconaut:chevron-triple-up",
	});
}

export default Component;
