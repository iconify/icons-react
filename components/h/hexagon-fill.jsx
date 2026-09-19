import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-g4gacxj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-g4gacxj"/>`,
		"fallback": "f7:hexagon-fill",
	});
}

export default Component;
