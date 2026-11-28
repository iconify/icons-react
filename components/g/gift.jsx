import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2b3a4b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2b3a4b2z"/>`,
		"fallback": "noviair-light:gift",
	});
}

export default Component;
