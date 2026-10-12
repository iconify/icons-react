import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2qdf5ous.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2qdf5ous"/>`,
		"fallback": "devicon:idris",
	});
}

export default Component;
