import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e_u4rsbeh.css';
import '../../css/l/lnhu51bbs.css';
import '../../css/z/z6t8ydbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e_u4rsbeh"/><path class="lnhu51bbs"/><path class="z6t8ydbzn"/></g>`,
		"fallback": "hugeicons:bathtub-01",
	});
}

export default Component;
