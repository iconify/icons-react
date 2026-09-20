import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q55h08zgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q55h08zgb"/>`,
		"fallback": "keyline-icons:globe-off-sharp",
	});
}

export default Component;
