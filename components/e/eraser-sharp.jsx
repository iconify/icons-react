import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnqvqz_ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnqvqz_ac"/>`,
		"fallback": "keyline-icons:eraser-sharp",
	});
}

export default Component;
