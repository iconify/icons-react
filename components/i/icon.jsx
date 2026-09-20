import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtcxr4dzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtcxr4dzz"/>`,
		"fallback": "thesvg-color:icon",
	});
}

export default Component;
