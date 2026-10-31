import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jf8khup_j.css';
import '../../css/h/h1ya0pgnz.css';
import '../../css/y/y80t39thx.css';
import '../../css/p/p-2roye1s.css';
import '../../css/z/z2fqh47ic.css';
import '../../css/i/iso4a7b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jf8khup_j wm-shadow"/><path class="h1ya0pgnz"/><path class="y80t39thx"/><path class="p-2roye1s"/><path class="z2fqh47ic"/><path class="iso4a7b1l"/></g>`,
		"fallback": "withicons-retro:house-wifi",
	});
}

export default Component;
