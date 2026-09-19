import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8l8khb2z.css';
import '../../css/u/uuh2v9f7r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8l8khb2z"/><path class="uuh2v9f7r"/>`,
		"fallback": "devicon:bash",
	});
}

export default Component;
