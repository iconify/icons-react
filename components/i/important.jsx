import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs1c3lqko.css';

const viewBox = {"width":128,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs1c3lqko"/>`,
		"fallback": "ps:important",
	});
}

export default Component;
