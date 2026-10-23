import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgc7ehb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgc7ehb4h"/>`,
		"fallback": "vadivam:bluetooth",
	});
}

export default Component;
