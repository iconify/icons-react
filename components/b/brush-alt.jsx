import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbw5lp6pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbw5lp6pf"/>`,
		"fallback": "bxs:brush-alt",
	});
}

export default Component;
