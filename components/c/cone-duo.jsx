import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpi92pwpd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u5mnzf2gv.css';
import '../../css/s/sgqd9obdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vpi92pwpd"/><g class="dt0cm9dhy primary"><path class="u5mnzf2gv"/><path class="sgqd9obdh"/></g>`,
		"fallback": "iconaut:cone-duo",
	});
}

export default Component;
