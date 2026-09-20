import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3anofnnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3anofnnx"/>`,
		"fallback": "ri:corner-right-up-fill",
	});
}

export default Component;
