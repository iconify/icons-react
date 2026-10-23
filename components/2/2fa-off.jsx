import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p74aevbjk.css';
import '../../css/i/iviarcrrc.css';
import '../../css/d/dym0xlxvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p74aevbjk"/><rect class="iviarcrrc"/><path class="dym0xlxvl"/></g>`,
		"fallback": "andrsrxn:2fa-off",
	});
}

export default Component;
