import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xui0s0b5u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xui0s0b5u"/>`,
		"fallback": "devicon-plain:gitlab",
	});
}

export default Component;
