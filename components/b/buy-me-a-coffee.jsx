import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t39s4jb2d.css';
import '../../css/z/zcykc_bah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t39s4jb2d"/><path class="zcykc_bah"/>`,
		"fallback": "selfhst:buy-me-a-coffee",
	});
}

export default Component;
