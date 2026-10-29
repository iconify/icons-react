import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2x5yebma.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2x5yebma"/>`,
		"fallback": "devicon-plain:firebase",
	});
}

export default Component;
