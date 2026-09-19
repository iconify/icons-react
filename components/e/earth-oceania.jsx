import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztaurccbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztaurccbd"/>`,
		"fallback": "fa6-solid:earth-oceania",
	});
}

export default Component;
