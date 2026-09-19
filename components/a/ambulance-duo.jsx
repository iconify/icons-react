import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm0g03ory.css';
import '../../css/c/c3yk-nbbq.css';
import '../../css/z/zb9y1hbiz.css';
import '../../css/k/kw6gw0l2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pm0g03ory"/><path class="c3yk-nbbq"/><path class="zb9y1hbiz"/><path class="kw6gw0l2h"/></g>`,
		"fallback": "glyphs:ambulance-duo",
	});
}

export default Component;
