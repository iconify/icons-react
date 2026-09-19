import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u4tbqsblh.css';
import '../../css/i/ikozek9sr.css';
import '../../css/e/et_5w2bcu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u4tbqsblh"/><path class="ikozek9sr"/><path class="et_5w2bcu"/></g>`,
		"fallback": "glyphs:flip-bold",
	});
}

export default Component;
