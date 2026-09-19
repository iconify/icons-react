import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhhkwqoof.css';
import '../../css/w/wclgmvb9s.css';
import '../../css/d/d_tdrgg1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhhkwqoof"/><path class="wclgmvb9s"/><path class="d_tdrgg1o"/>`,
		"fallback": "carbon:cics-system-group",
	});
}

export default Component;
