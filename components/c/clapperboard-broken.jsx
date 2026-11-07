import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ykueg1b1u.css';
import '../../css/n/nr7t2bb1e.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/l/l6e0kx4od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ykueg1b1u"/><path class="nr7t2bb1e"/><path class="si_mtzbvj"/><path class="l6e0kx4od"/></g>`,
		"fallback": "solar:clapperboard-broken",
	});
}

export default Component;
