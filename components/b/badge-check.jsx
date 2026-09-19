import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gu9200tlk.css';
import '../../css/u/u6uh8ob_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gu9200tlk"/><path class="u6uh8ob_t"/></g>`,
		"fallback": "iconoir:badge-check",
	});
}

export default Component;
