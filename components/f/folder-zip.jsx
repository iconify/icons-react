import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zid9c-lmh.css';
import '../../css/x/xspi4uqxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zid9c-lmh"/><path class="xspi4uqxm"/></g>`,
		"fallback": "hugeicons:folder-zip",
	});
}

export default Component;
