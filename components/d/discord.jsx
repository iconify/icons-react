import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q18biqbaz.css';
import '../../css/b/bxn3_jb7p.css';
import '../../css/p/p36kaob0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q18biqbaz"/><path class="bxn3_jb7p"/><path class="p36kaob0j"/></g>`,
		"fallback": "iconaut:discord",
	});
}

export default Component;
