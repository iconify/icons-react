import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc9n9eb3h.css';
import '../../css/z/zxnivje1s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc9n9eb3h"/><path class="zxnivje1s"/>`,
		"fallback": "fxemoji:heartgreen",
	});
}

export default Component;
