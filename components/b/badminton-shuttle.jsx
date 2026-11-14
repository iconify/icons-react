import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/brunkjbnf.css';
import '../../css/z/zzxs5ew1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="brunkjbnf"/><path class="zzxs5ew1j"/></g>`,
		"fallback": "hugeicons:badminton-shuttle",
	});
}

export default Component;
