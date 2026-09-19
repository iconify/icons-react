import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5ytazb7c.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5ytazb7c"/>`,
		"fallback": "gis:earth-pacific-o",
	});
}

export default Component;
