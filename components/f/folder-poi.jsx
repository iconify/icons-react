import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4_y_tr5d.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4_y_tr5d"/>`,
		"fallback": "gis:folder-poi",
	});
}

export default Component;
