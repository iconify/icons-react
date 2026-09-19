import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d24hfde5l.css';
import '../../css/k/k8lt5sbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="d24hfde5l"/><path class="k8lt5sbux"/></g>`,
		"fallback": "hugeicons:fan-01",
	});
}

export default Component;
