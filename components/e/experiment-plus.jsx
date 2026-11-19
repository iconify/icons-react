import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl7nbhbyz.css';
import '../../css/t/tm3qd_b6u.css';
import '../../css/y/y62tig_di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bl7nbhbyz"/><path class="tm3qd_b6u"/><path class="y62tig_di"/></g>`,
		"fallback": "andrsrxn:experiment-plus",
	});
}

export default Component;
