import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u899l7b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u899l7b8s"/>`,
		"fallback": "mdi:chili-mild-outline",
	});
}

export default Component;
