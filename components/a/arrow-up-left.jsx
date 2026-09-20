import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td599z-9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td599z-9y"/>`,
		"fallback": "mdi:arrow-up-left",
	});
}

export default Component;
