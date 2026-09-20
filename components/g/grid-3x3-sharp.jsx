import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avtm5wdul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avtm5wdul"/>`,
		"fallback": "keyline-icons:grid-3x3-sharp",
	});
}

export default Component;
