import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r81lg6bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r81lg6bjs"/>`,
		"fallback": "noviair-light:bot-gear",
	});
}

export default Component;
