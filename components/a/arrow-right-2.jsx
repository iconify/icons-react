import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am2uaik4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am2uaik4g"/>`,
		"fallback": "iconamoon:arrow-right-2",
	});
}

export default Component;
