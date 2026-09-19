import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mymaxnz5o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mymaxnz5o"/>`,
		"fallback": "dashicons:editor-bold",
	});
}

export default Component;
