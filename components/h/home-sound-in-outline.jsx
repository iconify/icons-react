import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gja2aab_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gja2aab_e"/>`,
		"fallback": "mdi:home-sound-in-outline",
	});
}

export default Component;
