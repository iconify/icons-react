import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0p60rdek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0p60rdek"/>`,
		"fallback": "ri:gatsby-fill",
	});
}

export default Component;
