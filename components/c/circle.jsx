import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur_hjldrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur_hjldrr"/>`,
		"fallback": "griddy-icons:circle",
	});
}

export default Component;
