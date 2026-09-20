import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6zmrcbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6zmrcbrx"/>`,
		"fallback": "ri:disc-line",
	});
}

export default Component;
