import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eye58abti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eye58abti"/>`,
		"fallback": "ri:connector-fill",
	});
}

export default Component;
