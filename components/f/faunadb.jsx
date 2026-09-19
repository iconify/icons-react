import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4urmnw-t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4urmnw-t"/>`,
		"fallback": "devicon:faunadb",
	});
}

export default Component;
