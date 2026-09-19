import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5tfq2sjp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5tfq2sjp"/>`,
		"fallback": "devicon-plain:gleam",
	});
}

export default Component;
