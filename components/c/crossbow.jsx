import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_2cylg5d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_2cylg5d"/>`,
		"fallback": "memory:crossbow",
	});
}

export default Component;
