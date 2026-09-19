import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cfiu11byo.css';
import '../../css/w/wlxjyse5h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="cfiu11byo"/><path class="wlxjyse5h"/></g>`,
		"fallback": "glyphs-poly:chevron-double",
	});
}

export default Component;
