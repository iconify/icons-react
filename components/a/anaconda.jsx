import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo27_sxlf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo27_sxlf"/>`,
		"fallback": "devicon:anaconda",
	});
}

export default Component;
