import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wua8cfg4z.css';
import '../../css/z/zrets2bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wua8cfg4z"/><path class="zrets2bfg"/></g>`,
		"fallback": "hugeicons:chat-spark",
	});
}

export default Component;
