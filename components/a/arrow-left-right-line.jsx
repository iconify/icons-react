import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytj3n3bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytj3n3bus"/>`,
		"fallback": "ri:arrow-left-right-line",
	});
}

export default Component;
