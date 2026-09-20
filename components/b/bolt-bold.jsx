import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzef3x4zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzef3x4zs"/>`,
		"fallback": "solar:bolt-bold",
	});
}

export default Component;
