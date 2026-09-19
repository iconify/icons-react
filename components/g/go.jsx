import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9d-2bb8l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9d-2bb8l"/>`,
		"fallback": "devicon-plain:go",
	});
}

export default Component;
