import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xji65qz3r.css';
import '../../css/w/ww_kt-b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xji65qz3r"/><path class="ww_kt-b2p"/></g>`,
		"fallback": "hugeicons:download-06",
	});
}

export default Component;
