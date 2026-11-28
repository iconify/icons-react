import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dov2pdbuq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h_2abro7x.css';
import '../../css/n/nv6nssw1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dov2pdbuq secondary"/><g class="dt0cm9dhy primary"><path class="h_2abro7x"/><path class="nv6nssw1g"/></g>`,
		"fallback": "iconaut:arrow-big-up-dash-duo",
	});
}

export default Component;
