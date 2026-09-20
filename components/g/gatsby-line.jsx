import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt6kbdbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt6kbdbam"/>`,
		"fallback": "ri:gatsby-line",
	});
}

export default Component;
