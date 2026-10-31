import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a90-ysdbq.css';
import '../../css/e/ezyq-4oxq.css';
import '../../css/i/i54ucfb4f.css';
import '../../css/p/pjlxlyk-n.css';
import '../../css/j/jrqk9vb8m.css';
import '../../css/n/n8kmwlb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a90-ysdbq wm-shadow"/><path class="ezyq-4oxq wm-shadow"/><path class="i54ucfb4f"/><path class="pjlxlyk-n"/><path class="jrqk9vb8m"/><path class="n8kmwlb8h wm-s"/></g>`,
		"fallback": "withicons-brutal:ambulance",
	});
}

export default Component;
