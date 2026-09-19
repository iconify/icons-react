import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-yngel5b.css';
import '../../css/k/kt6b1jbgl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-yngel5b"/><path class="kt6b1jbgl"/></g>`,
		"fallback": "glyphs:door-duo",
	});
}

export default Component;
