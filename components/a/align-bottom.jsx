import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7rd3fldd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7rd3fldd"/>`,
		"fallback": "fe:align-bottom",
	});
}

export default Component;
