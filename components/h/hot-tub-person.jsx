import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmiwrrb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmiwrrb4k"/>`,
		"fallback": "fa6-solid:hot-tub-person",
	});
}

export default Component;
