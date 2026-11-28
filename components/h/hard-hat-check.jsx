import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etwxr4bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etwxr4bvp"/>`,
		"fallback": "noviair-light:hard-hat-check",
	});
}

export default Component;
