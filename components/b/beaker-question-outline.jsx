import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7cs2_b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7cs2_b-s"/>`,
		"fallback": "mdi:beaker-question-outline",
	});
}

export default Component;
