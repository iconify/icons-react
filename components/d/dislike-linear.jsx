import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kq8y837-z.css';
import '../../css/l/lmh6yib_l.css';
import '../../css/u/u23lu7b_k.css';
import '../../css/e/eymym15ry.css';
import '../../css/m/mc3gpobgs.css';
import '../../css/x/x555n9v5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kq8y837-z"/><path class="lmh6yib_l"/><path class="u23lu7b_k"/><path class="eymym15ry"/><path class="mc3gpobgs"/><path class="x555n9v5n"/></g>`,
		"fallback": "solar:dislike-linear",
	});
}

export default Component;
