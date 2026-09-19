import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmg3ecoif.css';

const viewBox = {"width":1920,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmg3ecoif"/>`,
		"fallback": "fa:film",
	});
}

export default Component;
