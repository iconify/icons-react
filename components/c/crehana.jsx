import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt79s6bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt79s6bux"/>`,
		"fallback": "thesvg-color:crehana",
	});
}

export default Component;
