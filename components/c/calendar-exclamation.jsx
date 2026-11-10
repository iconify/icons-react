import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bigtc4wcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bigtc4wcp"/>`,
		"fallback": "sidekickicons:calendar-exclamation",
	});
}

export default Component;
