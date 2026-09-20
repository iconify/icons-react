import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad63tmb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad63tmb4b"/>`,
		"fallback": "mdi:arrow-left-drop-circle",
	});
}

export default Component;
