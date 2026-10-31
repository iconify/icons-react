import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wm1m3lbsv.css';
import '../../css/k/kv5qk9bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wm1m3lbsv"/><path class="kv5qk9bxb"/></g>`,
		"fallback": "struq:clear-style",
	});
}

export default Component;
