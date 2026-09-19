import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uusi_52_u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uusi_52_u"/>`,
		"fallback": "devicon-plain:clion",
	});
}

export default Component;
