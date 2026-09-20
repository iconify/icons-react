import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8g-31b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8g-31b0v"/>`,
		"fallback": "nrk:arrow-left",
	});
}

export default Component;
