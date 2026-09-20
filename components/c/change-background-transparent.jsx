import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/ey-x46a9w.css';
import '../../css/w/wyr41hl5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ey-x46a9w"/><path class="wyr41hl5r"/></g>`,
		"fallback": "streamline-plump-color:change-background-transparent",
	});
}

export default Component;
