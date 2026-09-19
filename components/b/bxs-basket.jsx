import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spyca5b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spyca5b2d"/>`,
		"fallback": "bx:bxs-basket",
	});
}

export default Component;
