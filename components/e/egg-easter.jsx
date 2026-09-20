import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrvj_fbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrvj_fbps"/>`,
		"fallback": "mdi:egg-easter",
	});
}

export default Component;
