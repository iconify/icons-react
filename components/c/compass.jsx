import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw6uymr8t.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw6uymr8t"/>`,
		"fallback": "gis:compass",
	});
}

export default Component;
