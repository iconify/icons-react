import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bazb3ccgr.css';
import '../../css/y/yy05a9bqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bazb3ccgr"/><path class="yy05a9bqd"/>`,
		"fallback": "energy-icons:car-key-48",
	});
}

export default Component;
