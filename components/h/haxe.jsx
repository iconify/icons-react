import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of_zlmdfz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of_zlmdfz"/>`,
		"fallback": "devicon-plain:haxe",
	});
}

export default Component;
