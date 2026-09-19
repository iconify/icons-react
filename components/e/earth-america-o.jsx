import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8t325kav.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8t325kav"/>`,
		"fallback": "gis:earth-america-o",
	});
}

export default Component;
