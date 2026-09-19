import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncr9o6bsk.css';
import '../../css/z/zegs8bbtq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncr9o6bsk"/><path class="zegs8bbtq"/>`,
		"fallback": "fxemoji:heartyellow",
	});
}

export default Component;
