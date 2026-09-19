import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kl1tb_bfl.css';
import '../../css/s/s3gypou3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kl1tb_bfl"/><path class="s3gypou3z"/></g>`,
		"fallback": "hugeicons:cooking-pot",
	});
}

export default Component;
