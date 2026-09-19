import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfu7fcddx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfu7fcddx"/>`,
		"fallback": "devicon:appwrite",
	});
}

export default Component;
