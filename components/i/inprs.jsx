import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j898_bc1h.css';

const viewBox = {"width":120,"height":32.26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j898_bc1h"/>`,
		"fallback": "thesvg-color:inprs",
	});
}

export default Component;
