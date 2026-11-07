import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-xvykjbc.css';
import '../../css/a/atm69obhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w-xvykjbc"/><path class="atm69obhq"/>`,
		"fallback": "solar:folder-dot-open-bold-duotone",
	});
}

export default Component;
