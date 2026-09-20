import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrmg1583g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrmg1583g"/>`,
		"fallback": "mdi:application-braces",
	});
}

export default Component;
