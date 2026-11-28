import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ajw6i38we.css';
import '../../css/h/h22d54nez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ajw6i38we"/><path class="h22d54nez"/></g>`,
		"fallback": "iconaut:dumpling",
	});
}

export default Component;
