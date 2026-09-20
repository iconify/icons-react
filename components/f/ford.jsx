import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uin1j8l2y.css';
import '../../css/l/lgs3ws6-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uin1j8l2y"/><path class="lgs3ws6-e"/>`,
		"fallback": "selfhst:ford",
	});
}

export default Component;
