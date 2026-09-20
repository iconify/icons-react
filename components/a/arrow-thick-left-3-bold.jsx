import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfdi0b5fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfdi0b5fr"/>`,
		"fallback": "streamline-ultimate:arrow-thick-left-3-bold",
	});
}

export default Component;
