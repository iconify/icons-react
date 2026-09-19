import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z0mjl28oo.css';
import '../../css/a/aeqfs_bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="z0mjl28oo"/><path class="aeqfs_bpo"/></g>`,
		"fallback": "hugeicons:ai-eraser",
	});
}

export default Component;
