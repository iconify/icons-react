import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhbyxpbbq.css';
import '../../css/p/pk02s0tyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhbyxpbbq"/><path class="pk02s0tyu"/>`,
		"fallback": "selfhst:erugo-light",
	});
}

export default Component;
