import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpx6umtca.css';
import '../../css/i/iol7-wboy.css';
import '../../css/h/hx-ne6b0c.css';
import '../../css/o/ourvjgbzk.css';
import '../../css/l/l4vdwdbyo.css';
import '../../css/j/jc8brab-y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kpx6umtca"/><path class="iol7-wboy"/><path class="hx-ne6b0c"/><path clip-rule="evenodd" class="ourvjgbzk"/><path class="l4vdwdbyo"/><path class="jc8brab-y"/></g>`,
		"fallback": "glyphs-poly:glasses",
	});
}

export default Component;
