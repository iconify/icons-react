import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5j85dd5c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5j85dd5c"/>`,
		"fallback": "garden:alert-error-fill-12",
	});
}

export default Component;
