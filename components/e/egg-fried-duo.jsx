import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tij9s_4ga.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sxtt7ca6r.css';
import '../../css/m/mydyanbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tij9s_4ga"/><g class="dt0cm9dhy primary"><path class="sxtt7ca6r"/><path class="mydyanbos"/></g>`,
		"fallback": "iconaut:egg-fried-duo",
	});
}

export default Component;
