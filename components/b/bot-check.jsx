import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uph89jbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uph89jbvr"/>`,
		"fallback": "noviair:bot-check",
	});
}

export default Component;
