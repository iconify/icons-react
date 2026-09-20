import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq68h36xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq68h36xc"/>`,
		"fallback": "ri:corner-down-left-line",
	});
}

export default Component;
