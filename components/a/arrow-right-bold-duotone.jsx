import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikxnezhma.css';
import '../../css/a/ao3xg6lae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ikxnezhma"/><path class="ao3xg6lae"/>`,
		"fallback": "solar:arrow-right-bold-duotone",
	});
}

export default Component;
