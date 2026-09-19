import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy1j1mu6r.css';
import '../../css/q/qmrmd-8xh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy1j1mu6r"/><path class="qmrmd-8xh"/>`,
		"fallback": "famicons:home",
	});
}

export default Component;
