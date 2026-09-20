import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj0mq3b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj0mq3b-d"/>`,
		"fallback": "ri:database-line",
	});
}

export default Component;
