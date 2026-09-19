import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sh-jwqb_w.css';
import '../../css/s/sg-e6fy6n.css';
import '../../css/x/xlpf8db-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sh-jwqb_w"/><path class="sg-e6fy6n"/><path class="xlpf8db-z"/></g>`,
		"fallback": "hugeicons:dim-sum-02",
	});
}

export default Component;
