import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey001ykao.css';
import '../../css/b/b_j3sbm8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey001ykao"/><path class="b_j3sbm8m"/>`,
		"fallback": "ion:fork",
	});
}

export default Component;
