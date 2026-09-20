import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p50qzbcks.css';
import '../../css/w/w8f9-0zcx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p50qzbcks"/><path class="w8f9-0zcx"/>`,
		"fallback": "nimbus:copy",
	});
}

export default Component;
