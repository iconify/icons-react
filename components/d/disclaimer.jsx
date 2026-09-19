import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7h9xac7h.css';
import '../../css/w/w53fmab5d.css';
import '../../css/b/bscrkv5xv.css';
import '../../css/i/iw0zruopo.css';
import '../../css/r/rncb8y9jg.css';
import '../../css/u/uma3bn25d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a7h9xac7h"><path class="w53fmab5d"/><path class="bscrkv5xv"/></g><g class="iw0zruopo"><path class="rncb8y9jg"/><path class="uma3bn25d"/></g>`,
		"fallback": "flat-color-icons:disclaimer",
	});
}

export default Component;
