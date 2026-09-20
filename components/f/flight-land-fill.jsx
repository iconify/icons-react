import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc4k0s5gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc4k0s5gf"/>`,
		"fallback": "mingcute:flight-land-fill",
	});
}

export default Component;
