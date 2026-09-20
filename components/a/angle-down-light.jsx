import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygez5ob8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygez5ob8g"/>`,
		"fallback": "stash:angle-down-light",
	});
}

export default Component;
