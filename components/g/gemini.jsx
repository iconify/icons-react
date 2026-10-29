import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7-ygmviy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7-ygmviy"/>`,
		"fallback": "devicon-plain:gemini",
	});
}

export default Component;
