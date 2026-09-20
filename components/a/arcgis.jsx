import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn68_t3-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn68_t3-n"/>`,
		"fallback": "thesvg-color:arcgis",
	});
}

export default Component;
