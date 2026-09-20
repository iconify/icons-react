import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q74zsn_hp.css';
import '../../css/c/c6ymqnboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q74zsn_hp"/><path class="c6ymqnboh"/></g>`,
		"fallback": "solar:cloud-bolt-line-duotone",
	});
}

export default Component;
