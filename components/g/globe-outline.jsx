import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpf8b5hfv.css';
import '../../css/p/pinl4fblr.css';
import '../../css/x/xk9q94btg.css';
import '../../css/f/fghgm1b7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpf8b5hfv"/><path class="pinl4fblr"/><path class="xk9q94btg"/><path class="fghgm1b7d"/>`,
		"fallback": "famicons:globe-outline",
	});
}

export default Component;
