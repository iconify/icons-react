import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0i-ett0z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0i-ett0z"/>`,
		"fallback": "dashicons:controls-pause",
	});
}

export default Component;
