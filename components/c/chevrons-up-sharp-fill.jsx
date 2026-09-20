import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mww2knb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mww2knb8y"/>`,
		"fallback": "keyline-icons:chevrons-up-sharp-fill",
	});
}

export default Component;
