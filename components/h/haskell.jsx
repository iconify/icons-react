import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9q1n_b5d.css';
import '../../css/a/abljxkb8r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9q1n_b5d"/><path class="abljxkb8r"/>`,
		"fallback": "devicon-plain:haskell",
	});
}

export default Component;
