import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2xv61bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2xv61bwi"/>`,
		"fallback": "pixel:arrow-alt-circle-down-solid",
	});
}

export default Component;
