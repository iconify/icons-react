import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkpku9bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkpku9bxr"/>`,
		"fallback": "keyline-icons:eraser-sharp-fill",
	});
}

export default Component;
