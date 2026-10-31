import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/helfofbfk.css';
import '../../css/d/dfcrdybmo.css';
import '../../css/v/vyszwzp6v.css';
import '../../css/r/rdn2jqb0z.css';
import '../../css/n/ngkozcc9l.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="helfofbfk wm-shadow"/><path class="dfcrdybmo"/><path class="vyszwzp6v"/><path class="rdn2jqb0z"/><path class="ngkozcc9l"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:eye-off",
	});
}

export default Component;
