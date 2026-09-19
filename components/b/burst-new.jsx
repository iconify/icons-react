import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2dz3rb0u.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2dz3rb0u"/>`,
		"fallback": "foundation:burst-new",
	});
}

export default Component;
