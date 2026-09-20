import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfi2grt-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfi2grt-v"/>`,
		"fallback": "mage:caret-up",
	});
}

export default Component;
