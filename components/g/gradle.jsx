import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inps89biv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inps89biv"/>`,
		"fallback": "devicon-plain:gradle",
	});
}

export default Component;
