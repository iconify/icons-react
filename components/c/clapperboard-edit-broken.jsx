import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jth6cs3er.css';
import '../../css/y/ykueg1b1u.css';
import '../../css/n/nr7t2bb1e.css';
import '../../css/u/udkm02blq.css';
import '../../css/l/l6e0kx4od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jth6cs3er"/><path class="ykueg1b1u"/><path class="nr7t2bb1e"/><path class="udkm02blq"/><path class="l6e0kx4od"/></g>`,
		"fallback": "solar:clapperboard-edit-broken",
	});
}

export default Component;
