import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jas0kjbga.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jas0kjbga"/>`,
		"fallback": "devicon-plain:googleappscript",
	});
}

export default Component;
