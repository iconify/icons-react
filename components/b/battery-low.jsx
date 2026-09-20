import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8f0kfb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8f0kfb1z"/>`,
		"fallback": "vadivam:battery-low",
	});
}

export default Component;
