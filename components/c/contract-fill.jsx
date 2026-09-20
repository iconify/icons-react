import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggrkf1b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggrkf1b8r"/>`,
		"fallback": "ri:contract-fill",
	});
}

export default Component;
