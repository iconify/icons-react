import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii_q9nbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii_q9nbli"/>`,
		"fallback": "cbi:bandcamp-alt",
	});
}

export default Component;
