import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/p-7vbgb0t.css';
import '../../css/n/n7__w6snp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="p-7vbgb0t"/><path class="n7__w6snp"/></g>`,
		"fallback": "hugeicons:ai-idea",
	});
}

export default Component;
