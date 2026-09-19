import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um1gt6bcy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um1gt6bcy"/>`,
		"fallback": "gis:bbox",
	});
}

export default Component;
