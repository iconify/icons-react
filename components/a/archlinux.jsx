import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9seynbrw.css';
import '../../css/b/bz2e_vbhp.css';
import '../../css/c/cq1gd6biw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w9seynbrw"><path class="bz2e_vbhp"/><path class="cq1gd6biw"/></g>`,
		"fallback": "devicon:archlinux",
	});
}

export default Component;
