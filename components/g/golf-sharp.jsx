import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioq_pnb1t.css';
import '../../css/x/xde3kv5ou.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioq_pnb1t"/><path class="xde3kv5ou"/>`,
		"fallback": "famicons:golf-sharp",
	});
}

export default Component;
