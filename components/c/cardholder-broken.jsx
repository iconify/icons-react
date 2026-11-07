import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/o/ok6un1e_l.css';
import '../../css/n/n0kyqub_b.css';
import '../../css/b/bh0wyoqvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="si_mtzbvj"/><path class="ok6un1e_l"/><path class="n0kyqub_b"/><path class="bh0wyoqvw"/></g>`,
		"fallback": "solar:cardholder-broken",
	});
}

export default Component;
