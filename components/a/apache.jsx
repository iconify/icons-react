import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8p9iwiog.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8p9iwiog"/>`,
		"fallback": "devicon-plain:apache",
	});
}

export default Component;
