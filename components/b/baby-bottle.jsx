import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v-t5xdklb.css';
import '../../css/y/yvpggpb8s.css';
import '../../css/k/k7vajtj7l.css';
import '../../css/p/pi7r_2kgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v-t5xdklb wm-shadow"/><path class="wm-shadow yvpggpb8s"/><path class="k7vajtj7l"/><path class="pi7r_2kgf"/></g>`,
		"fallback": "withicons-brutal:baby-bottle",
	});
}

export default Component;
