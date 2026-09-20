import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jskqlbpwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jskqlbpwx"/>`,
		"fallback": "ri:arrow-down-long-fill",
	});
}

export default Component;
