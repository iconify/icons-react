import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl10r0bke.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl10r0bke"/>`,
		"fallback": "gis:height-map",
	});
}

export default Component;
