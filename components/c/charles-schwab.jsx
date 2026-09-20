import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckkr5xbvl.css';
import '../../css/z/zp5j1oj1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckkr5xbvl"/><path class="zp5j1oj1u"/>`,
		"fallback": "selfhst:charles-schwab",
	});
}

export default Component;
