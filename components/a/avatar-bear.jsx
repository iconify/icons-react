import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xs9kttbeh.css';
import '../../css/o/ou68d88je.css';
import '../../css/f/fxroqzb7h.css';
import '../../css/e/e_3illd5z.css';
import '../../css/w/wvqzdwy_b.css';
import '../../css/f/fjb3--0lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k xs9kttbeh"/><path class="ou68d88je wm-k"/><path class="fxroqzb7h wm-k"/><path class="e_3illd5z wm-shadow"/><path class="wm-shine wvqzdwy_b"/><path class="fjb3--0lq wm-shine"/></g>`,
		"fallback": "withicons-valentine:avatar-bear",
	});
}

export default Component;
