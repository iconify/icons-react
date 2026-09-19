import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkib5uw3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkib5uw3c"/>`,
		"fallback": "hugeicons:chevrons-left",
	});
}

export default Component;
