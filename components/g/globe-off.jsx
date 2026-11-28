import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0l_l8baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0l_l8baz"/>`,
		"fallback": "noviair-light:globe-off",
	});
}

export default Component;
