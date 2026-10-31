import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ynpy5jbax.css';
import '../../css/a/aezssibmt.css';
import '../../css/f/f5v4qdb4b.css';
import '../../css/l/llvkdsbbe.css';
import '../../css/f/f000v-6wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow ynpy5jbax"/><path class="aezssibmt"/><path class="f5v4qdb4b"/><path class="llvkdsbbe"/><path class="f000v-6wy"/></g>`,
		"fallback": "withicons-retro:carrot",
	});
}

export default Component;
