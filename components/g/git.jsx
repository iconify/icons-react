import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-7nacbwe.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-7nacbwe"/>`,
		"fallback": "devicon-plain:git",
	});
}

export default Component;
