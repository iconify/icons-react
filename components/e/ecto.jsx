import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7vdw0i-h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7vdw0i-h"/>`,
		"fallback": "devicon:ecto",
	});
}

export default Component;
