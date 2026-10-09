import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9pad14ep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9pad14ep"/>`,
		"fallback": "energy-icons:grip-vertical-20",
	});
}

export default Component;
