import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2kvjdb3j.css';
import '../../css/a/a0a-tm2rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2kvjdb3j"/><path class="a0a-tm2rn"/>`,
		"fallback": "bx:bx-user-circle",
	});
}

export default Component;
