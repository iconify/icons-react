import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vltn-2bvp.css';
import '../../css/g/gk43m7bjx.css';
import '../../css/e/exgf0m5uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vltn-2bvp"/><path class="gk43m7bjx"/><path class="exgf0m5uh"/></g>`,
		"fallback": "iconaut:external-link",
	});
}

export default Component;
