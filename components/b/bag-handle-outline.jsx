import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdj82wxwd.css';
import '../../css/k/kr_8yqlhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdj82wxwd"/><path class="kr_8yqlhq"/>`,
		"fallback": "famicons:bag-handle-outline",
	});
}

export default Component;
