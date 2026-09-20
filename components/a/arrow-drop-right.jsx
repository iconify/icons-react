import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn9pn5b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn9pn5b9f"/>`,
		"fallback": "lets-icons:arrow-drop-right",
	});
}

export default Component;
