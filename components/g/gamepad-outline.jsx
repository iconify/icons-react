import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ir4dw3bpl.css';
import '../../css/y/y2orggbby.css';
import '../../css/n/n01fo5_qx.css';
import '../../css/b/bjl-racht.css';
import '../../css/a/axtmyacbi.css';
import '../../css/e/esglpskpa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ir4dw3bpl"/><path class="y2orggbby"/><path class="n01fo5_qx"/><path class="bjl-racht"/><path class="axtmyacbi"/><path class="esglpskpa"/></g>`,
		"fallback": "glyphs:gamepad-outline",
	});
}

export default Component;
