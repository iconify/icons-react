import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftf97obuh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftf97obuh"/>`,
		"fallback": "selfhst:glpi-light",
	});
}

export default Component;
