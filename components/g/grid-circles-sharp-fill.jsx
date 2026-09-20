import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb-ylj57l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb-ylj57l"/>`,
		"fallback": "keyline-icons:grid-circles-sharp-fill",
	});
}

export default Component;
