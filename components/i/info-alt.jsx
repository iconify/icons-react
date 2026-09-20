import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfle56dsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfle56dsl"/>`,
		"fallback": "lets-icons:info-alt",
	});
}

export default Component;
