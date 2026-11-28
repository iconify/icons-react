import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw9-9do_v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jo_ql869u.css';
import '../../css/n/n1-nh8qnp.css';
import '../../css/x/xngwvqbsq.css';
import '../../css/p/p6hjs_b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw9-9do_v secondary"/><g class="dt0cm9dhy primary"><path class="jo_ql869u"/><path class="n1-nh8qnp"/><path class="xngwvqbsq"/><path class="p6hjs_b5l"/></g>`,
		"fallback": "iconaut:image-x-duo",
	});
}

export default Component;
