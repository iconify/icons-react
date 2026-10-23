import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2j6rdzub.css';
import '../../css/u/u_o_p2ugk.css';
import '../../css/i/ipo2-9b3w.css';
import '../../css/b/bj6rtmbox.css';
import '../../css/w/w51wt2bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o2j6rdzub"/><rect class="u_o_p2ugk"/><path class="ipo2-9b3w"/><rect class="bj6rtmbox"/><path class="w51wt2bab"/></g>`,
		"fallback": "andrsrxn:credit-card-lock",
	});
}

export default Component;
