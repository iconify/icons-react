import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4ei0rm9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4ei0rm9y"/>`,
		"fallback": "pixel:arrow-right",
	});
}

export default Component;
