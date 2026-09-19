import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_to694uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_to694uh"/>`,
		"fallback": "griddy-icons:align-top",
	});
}

export default Component;
