import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3jmpsbsf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3jmpsbsf"/>`,
		"fallback": "f7:exclamationmark-shield",
	});
}

export default Component;
