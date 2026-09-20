import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/istg6zbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="istg6zbfd"/>`,
		"fallback": "ri:import-line",
	});
}

export default Component;
