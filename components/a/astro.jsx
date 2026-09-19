import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvbk_blhj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvbk_blhj"/>`,
		"fallback": "devicon-plain:astro",
	});
}

export default Component;
