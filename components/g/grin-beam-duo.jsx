import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/t/t0d0-mb2n.css';
import '../../css/w/w9qr8ybyg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="t0d0-mb2n"/><path class="w9qr8ybyg"/></g>`,
		"fallback": "glyphs:grin-beam-duo",
	});
}

export default Component;
