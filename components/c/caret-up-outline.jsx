import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tupdf321f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tupdf321f"/>`,
		"fallback": "mdi:caret-up-outline",
	});
}

export default Component;
