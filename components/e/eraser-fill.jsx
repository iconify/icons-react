import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwno7hb6z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwno7hb6z"/>`,
		"fallback": "bi:eraser-fill",
	});
}

export default Component;
