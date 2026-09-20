import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa7-4xb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa7-4xb-l"/>`,
		"fallback": "ri:inbox-archive-fill",
	});
}

export default Component;
