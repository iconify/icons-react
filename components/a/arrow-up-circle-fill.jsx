import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnlhaj0by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnlhaj0by"/>`,
		"fallback": "ri:arrow-up-circle-fill",
	});
}

export default Component;
