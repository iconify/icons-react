import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o9116fb6p.css';
import '../../css/o/o7es60yyc.css';
import '../../css/g/gvv2ijfji.css';
import '../../css/s/s9232rcgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o9116fb6p wm-shadow"/><path class="o7es60yyc"/><path class="gvv2ijfji"/><path class="s9232rcgp"/></g>`,
		"fallback": "withicons-retro:avatar-person-wheelchair",
	});
}

export default Component;
