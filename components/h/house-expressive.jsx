import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiv8c9bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiv8c9bhv"/>`,
		"fallback": "nrk:house-expressive",
	});
}

export default Component;
