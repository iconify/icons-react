import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bd374vbsj.css';
import '../../css/y/ypbfh0z5c.css';
import '../../css/n/nea_p2b3n.css';
import '../../css/j/jmvirxj7e.css';
import '../../css/o/ospxqvbgy.css';
import '../../css/i/ihqiidb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bd374vbsj wm-shadow"/><path class="ypbfh0z5c"/><path class="nea_p2b3n"/><path class="jmvirxj7e"/><path class="ospxqvbgy"/><path class="ihqiidb6e"/></g>`,
		"fallback": "withicons-retro:database",
	});
}

export default Component;
