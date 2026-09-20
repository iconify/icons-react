import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq8ew7via.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gq8ew7via"/>`,
		"fallback": "keyline-icons:dice-6-horizontal-sharp-fill",
	});
}

export default Component;
