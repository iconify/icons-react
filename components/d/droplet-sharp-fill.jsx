import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aevyr0kve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aevyr0kve"/>`,
		"fallback": "keyline-icons:droplet-sharp-fill",
	});
}

export default Component;
