import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9-9zsb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9-9zsb3b"/>`,
		"fallback": "solar:arrow-left-up-linear",
	});
}

export default Component;
