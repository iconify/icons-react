import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jehkic28y.css';
import '../../css/f/fszl4kf6j.css';
import '../../css/h/hugh8jbpc.css';
import '../../css/c/c0vuimrvq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jehkic28y"/><path class="fszl4kf6j"/><path class="hugh8jbpc"/><path class="c0vuimrvq"/></g>`,
		"fallback": "glyphs:garage-outline",
	});
}

export default Component;
