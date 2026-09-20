import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0xc77b1s.css';
import '../../css/v/v8t77j0kk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0xc77b1s"/><path class="v8t77j0kk"/>`,
		"fallback": "selfhst:box",
	});
}

export default Component;
