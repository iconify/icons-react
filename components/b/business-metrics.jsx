import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0jy9xbgn.css';
import '../../css/l/l2p99h1gu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0jy9xbgn"/><path class="l2p99h1gu"/>`,
		"fallback": "carbon:business-metrics",
	});
}

export default Component;
