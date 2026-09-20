import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmc1bmeor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmc1bmeor"/>`,
		"fallback": "mdi:compressed-folder-outline",
	});
}

export default Component;
