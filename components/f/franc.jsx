import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1xmswblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1xmswblj"/>`,
		"fallback": "noviair-light:franc",
	});
}

export default Component;
