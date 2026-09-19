import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ru1ae30ek.css';
import '../../css/h/hbitvks7s.css';
import '../../css/a/am48ss4er.css';
import '../../css/w/wo_-lacfx.css';
import '../../css/k/kytzhiaey.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ru1ae30ek"/><path class="hbitvks7s"/><path class="am48ss4er"/><path clip-rule="evenodd" class="wo_-lacfx"/><path class="kytzhiaey"/></g>`,
		"fallback": "glyphs-poly:analytics",
	});
}

export default Component;
