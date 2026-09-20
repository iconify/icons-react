import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh3tv6bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh3tv6bzp"/>`,
		"fallback": "solar:alt-arrow-right-linear",
	});
}

export default Component;
