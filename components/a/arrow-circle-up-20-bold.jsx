import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/l/lur5pck6s.css';
import '../../css/c/ch2lc7b8o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="lur5pck6s"/><path class="ch2lc7b8o"/>`,
		"fallback": "energy-icons:arrow-circle-up-20-bold",
	});
}

export default Component;
