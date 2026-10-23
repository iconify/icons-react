import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7zjwvbfm.css';
import '../../css/p/poxluybvn.css';
import '../../css/b/bfh85bb6e.css';
import '../../css/j/j6tcvy3zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i7zjwvbfm"/><path class="poxluybvn"/><path class="bfh85bb6e"/><path class="j6tcvy3zz"/></g>`,
		"fallback": "andrsrxn:champagne",
	});
}

export default Component;
