import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s78w2n1mt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s78w2n1mt"/>`,
		"fallback": "devicon-plain:artixlinux",
	});
}

export default Component;
