import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uujfweb9r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uujfweb9r"/>`,
		"fallback": "devicon-plain:fastify",
	});
}

export default Component;
