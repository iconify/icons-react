import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s3amhcb_r.css';
import '../../css/p/p8noaabtb.css';
import '../../css/a/an7jw-jll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s3amhcb_r"/><path class="p8noaabtb"/><path class="an7jw-jll"/></g>`,
		"fallback": "hugeicons:baby-girl-dress",
	});
}

export default Component;
