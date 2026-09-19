import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpr1c-b9k.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpr1c-b9k"/>`,
		"fallback": "gis:folder-globe",
	});
}

export default Component;
