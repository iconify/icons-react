import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhbyxpbbq.css';
import '../../css/q/qxnbbh5_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhbyxpbbq"/><path class="qxnbbh5_c"/>`,
		"fallback": "selfhst:erugo-light",
	});
}

export default Component;
