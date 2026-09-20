import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc8791b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc8791b5o"/>`,
		"fallback": "ri:community-line",
	});
}

export default Component;
