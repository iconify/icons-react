import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bere3e6ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bere3e6ii"/>`,
		"fallback": "mdi:home-floor-g",
	});
}

export default Component;
