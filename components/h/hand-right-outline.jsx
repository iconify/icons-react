import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnjtaqb5l.css';
import '../../css/z/zogbbpbrk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnjtaqb5l"/><path class="zogbbpbrk"/>`,
		"fallback": "ion:hand-right-outline",
	});
}

export default Component;
