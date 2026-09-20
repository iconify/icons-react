import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/kq8y837-z.css';
import '../../css/l/lmh6yib_l.css';
import '../../css/u/u23lu7b_k.css';
import '../../css/l/lc22ps3uh.css';
import '../../css/d/dj2hskmjs.css';
import '../../css/i/ijb5ncbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><g class="mc2zb0bvp"><path class="kq8y837-z"/><path class="lmh6yib_l"/></g><path class="u23lu7b_k"/><path class="lc22ps3uh"/><path class="dj2hskmjs"/><path class="ijb5ncbmm"/></g>`,
		"fallback": "solar:dislike-line-duotone",
	});
}

export default Component;
