import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azsfvfb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azsfvfb4a"/>`,
		"fallback": "keyline-icons:circle-chevrons-up-sharp-fill",
	});
}

export default Component;
