import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd798bcah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd798bcah"/>`,
		"fallback": "basil:arrow-left-outline",
	});
}

export default Component;
