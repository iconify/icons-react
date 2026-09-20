import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nug48ridb.css';
import '../../css/e/e9aohwxwp.css';
import '../../css/s/spdwh3t1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nug48ridb"/><path class="e9aohwxwp"/><path class="spdwh3t1s"/></g>`,
		"fallback": "solar:code-2-broken",
	});
}

export default Component;
