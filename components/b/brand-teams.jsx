import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xoqr8hbno.css';
import '../../css/k/krm0hrnbn.css';
import '../../css/m/mc-5wbc8b.css';
import '../../css/b/bkv2pmbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xoqr8hbno"/><path class="krm0hrnbn"/><path class="mc-5wbc8b"/><path class="bkv2pmbdz"/></g>`,
		"fallback": "tabler:brand-teams",
	});
}

export default Component;
