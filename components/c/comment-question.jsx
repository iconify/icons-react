import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k5kdr4bqp.css';
import '../../css/m/muta9tbky.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k5kdr4bqp"/><path class="muta9tbky"/></g>`,
		"fallback": "glyphs:comment-question",
	});
}

export default Component;
