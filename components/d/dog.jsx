import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ynh-y4bge.css';
import '../../css/y/y53y7edxy.css';
import '../../css/e/e_baxktzp.css';
import '../../css/h/hljsh5bsw.css';
import '../../css/e/e6juojboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ynh-y4bge"/><path class="y53y7edxy"/><path class="e_baxktzp"/><path class="hljsh5bsw"/><path class="e6juojboa"/></g>`,
		"fallback": "iconaut:dog",
	});
}

export default Component;
