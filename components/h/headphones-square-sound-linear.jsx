import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/htafvgl4t.css';
import '../../css/t/tcgmn_-rp.css';
import '../../css/p/puzdu8iqm.css';
import '../../css/t/t6t1svbap.css';
import '../../css/n/nbtk0l7ns.css';
import '../../css/b/b-gr_bmff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="htafvgl4t"/><path class="tcgmn_-rp"/><path class="puzdu8iqm"/><path class="t6t1svbap"/><path class="nbtk0l7ns"/><path class="b-gr_bmff"/></g>`,
		"fallback": "solar:headphones-square-sound-linear",
	});
}

export default Component;
