import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/htv_boqdq.css';
import '../../css/r/rl-ihu15q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="htv_boqdq"/><path class="rl-ihu15q"/></g>`,
		"fallback": "glyphs-poly:cross-christian",
	});
}

export default Component;
