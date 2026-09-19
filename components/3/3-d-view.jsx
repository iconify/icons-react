import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rw9dcsb8a.css';
import '../../css/z/zv8av_7po.css';
import '../../css/k/kqv4krtmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rw9dcsb8a"/><path class="zv8av_7po"/><path class="kqv4krtmb"/></g>`,
		"fallback": "hugeicons:3-d-view",
	});
}

export default Component;
