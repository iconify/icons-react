import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k5l_zwbaq.css';
import '../../css/m/myrub2tat.css';
import '../../css/q/qvg2egx2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="k5l_zwbaq"/><path vector-effect="non-scaling-stroke" class="myrub2tat"/><path vector-effect="non-scaling-stroke" class="qvg2egx2p"/></g>`,
		"fallback": "wordpress:cog",
	});
}

export default Component;
