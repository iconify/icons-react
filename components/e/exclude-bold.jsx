import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgxfxxbfa.css';
import '../../css/d/dlzwfk8ub.css';
import '../../css/y/y1wcivbjr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgxfxxbfa"/><path class="dlzwfk8ub"/><path class="y1wcivbjr"/></g>`,
		"fallback": "glyphs:exclude-bold",
	});
}

export default Component;
