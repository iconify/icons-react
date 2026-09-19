import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhj4miene.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhj4miene"/>`,
		"fallback": "devicon:expo",
	});
}

export default Component;
