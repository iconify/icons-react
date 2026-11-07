import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6_x9xmbd.css';
import '../../css/c/c-ivyjb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6_x9xmbd"/><path class="c-ivyjb8c"/>`,
		"fallback": "solar:alt-arrow-right-bold-duotone",
	});
}

export default Component;
