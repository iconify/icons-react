import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0-dleeea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0-dleeea"/>`,
		"fallback": "si:cancel-presentation-line",
	});
}

export default Component;
