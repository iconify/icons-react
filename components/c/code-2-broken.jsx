import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nug48ridb.css';
import '../../css/h/hurnl5bgk.css';
import '../../css/t/t90_kbcvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nug48ridb"/><path class="hurnl5bgk"/><path class="t90_kbcvk"/></g>`,
		"fallback": "solar:code-2-broken",
	});
}

export default Component;
