import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdibqed7e.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdibqed7e"/>`,
		"fallback": "gis:contour-map",
	});
}

export default Component;
