import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd4yx7c9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd4yx7c9x"/>`,
		"fallback": "mdi:border-horizontal",
	});
}

export default Component;
