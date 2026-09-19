import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp1cw5b_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp1cw5b_a"/>`,
		"fallback": "fa6-solid:arrows-to-dot",
	});
}

export default Component;
