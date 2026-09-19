import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk86-bv6z.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk86-bv6z"/>`,
		"fallback": "fa6-solid:angle-right",
	});
}

export default Component;
