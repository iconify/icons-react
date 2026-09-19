import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuwsj3zho.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuwsj3zho"/>`,
		"fallback": "garden:folder-closed-stroke-12",
	});
}

export default Component;
