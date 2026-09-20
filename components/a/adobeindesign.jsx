import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjfbw8b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjfbw8b8k"/>`,
		"fallback": "simple-icons:adobeindesign",
	});
}

export default Component;
