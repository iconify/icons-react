import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sacp62b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sacp62b3i"/>`,
		"fallback": "keyline-icons:chart-scatter-bubble-sharp",
	});
}

export default Component;
