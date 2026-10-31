import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gfci7tbsc.css';
import '../../css/x/xeto-3bnn.css';
import '../../css/x/x1nz57bux.css';
import '../../css/e/exqd6i1-h.css';
import '../../css/n/n9rpzpfcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gfci7tbsc wm-shadow"/><path class="xeto-3bnn"/><path class="x1nz57bux"/><path class="exqd6i1-h"/><path class="n9rpzpfcc"/></g>`,
		"fallback": "withicons-retro:cloud-sun",
	});
}

export default Component;
