import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx4lt75ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx4lt75ew"/>`,
		"fallback": "mdi:bird",
	});
}

export default Component;
