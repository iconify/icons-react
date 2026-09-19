import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua6_9pbeu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua6_9pbeu"/>`,
		"fallback": "file-icons:doclets",
	});
}

export default Component;
