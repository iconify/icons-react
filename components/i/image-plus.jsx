import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jo_ql869u.css';
import '../../css/n/n1-nh8qnp.css';
import '../../css/x/xngwvqbsq.css';
import '../../css/k/khr9wfb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jo_ql869u"/><path class="n1-nh8qnp"/><path class="xngwvqbsq"/><path class="khr9wfb2f"/></g>`,
		"fallback": "iconaut:image-plus",
	});
}

export default Component;
