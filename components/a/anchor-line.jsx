import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz4uxmb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz4uxmb5l"/>`,
		"fallback": "ri:anchor-line",
	});
}

export default Component;
