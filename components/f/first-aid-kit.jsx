import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xyrirzbow.css';
import '../../css/i/ixrulac1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xyrirzbow"/><path class="ixrulac1n"/></g>`,
		"fallback": "icon-park-outline:first-aid-kit",
	});
}

export default Component;
