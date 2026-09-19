import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6ubm4bbe.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6ubm4bbe"/>`,
		"fallback": "gis:car",
	});
}

export default Component;
