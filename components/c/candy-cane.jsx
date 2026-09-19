import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh5wxqbrd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh5wxqbrd"/>`,
		"fallback": "fa7-solid:candy-cane",
	});
}

export default Component;
