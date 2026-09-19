import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yat57cxyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yat57cxyx"/>`,
		"fallback": "iconoir:euro",
	});
}

export default Component;
