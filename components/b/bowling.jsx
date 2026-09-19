import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da1b7yb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da1b7yb7o"/>`,
		"fallback": "guidance:bowling",
	});
}

export default Component;
