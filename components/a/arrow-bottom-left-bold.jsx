import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7kvoqbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7kvoqbyd"/>`,
		"fallback": "mdi:arrow-bottom-left-bold",
	});
}

export default Component;
