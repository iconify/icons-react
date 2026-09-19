import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4sx8_brx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4sx8_brx"/>`,
		"fallback": "devicon-plain:ghidra",
	});
}

export default Component;
