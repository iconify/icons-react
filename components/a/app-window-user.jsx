import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zd_g2hbja.css';
import '../../css/v/vcy17sz7h.css';
import '../../css/j/jmqzenbqg.css';
import '../../css/h/henm0ibii.css';
import '../../css/x/x0xzbh-3j.css';
import '../../css/i/i0b6qxbvn.css';
import '../../css/t/t7wuccbiq.css';
import '../../css/r/rj5pbqb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zd_g2hbja"/><path class="vcy17sz7h"/><path class="jmqzenbqg"/><path class="henm0ibii"/><path class="x0xzbh-3j"/><path class="i0b6qxbvn"/><path class="t7wuccbiq"/><path class="rj5pbqb_c"/></g>`,
		"fallback": "streamline-freehand-color:app-window-user",
	});
}

export default Component;
