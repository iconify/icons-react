import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3c7zwbdg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3c7zwbdg"/>`,
		"fallback": "gis:coord-system",
	});
}

export default Component;
