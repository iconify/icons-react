import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x75pb3blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x75pb3blo"/>`,
		"fallback": "keyline-icons:door",
	});
}

export default Component;
