import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmww13fjw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmww13fjw"/>`,
		"fallback": "devicon-plain:figma",
	});
}

export default Component;
