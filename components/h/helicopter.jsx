import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afg6-l8sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afg6-l8sv"/>`,
		"fallback": "mdi:helicopter",
	});
}

export default Component;
