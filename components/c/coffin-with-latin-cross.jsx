import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h05wg1b6v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h05wg1b6v"/>`,
		"fallback": "pinhead:coffin-with-latin-cross",
	});
}

export default Component;
