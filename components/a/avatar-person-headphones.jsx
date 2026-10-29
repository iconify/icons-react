import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jnmyo5jwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/q/q6hphdz7k.css';
import '../../css/y/ysbsdobug.css';
import '../../css/x/xvjipzb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jnmyo5jwp"/><path class="d3y9mw6db"/><path class="q6hphdz7k wm-a"/><path class="wm-a ysbsdobug"/><path class="wm-a xvjipzb1h"/></g>`,
		"fallback": "withicons:avatar-person-headphones",
	});
}

export default Component;
