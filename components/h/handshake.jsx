import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipj7zt6mi.css';
import '../../css/f/fg7v-gbhz.css';
import '../../css/f/fvus08bgw.css';
import '../../css/e/e4q0uqbgz.css';
import '../../css/w/w05zvfbve.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ipj7zt6mi"/><path class="fg7v-gbhz"/><path class="fvus08bgw"/><rect class="e4q0uqbgz"/><rect class="w05zvfbve"/></g>`,
		"fallback": "glyphs-poly:handshake",
	});
}

export default Component;
