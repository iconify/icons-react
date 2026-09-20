import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aodq9y6zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aodq9y6zp"/>`,
		"fallback": "mdi:github-box",
	});
}

export default Component;
