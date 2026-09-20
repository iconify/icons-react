import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia65cdbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia65cdbfp"/>`,
		"fallback": "mdi:diamond-stone",
	});
}

export default Component;
