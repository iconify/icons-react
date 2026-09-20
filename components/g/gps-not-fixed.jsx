import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni45svb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni45svb9y"/>`,
		"fallback": "mdi:gps-not-fixed",
	});
}

export default Component;
