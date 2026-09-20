import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2a3-308n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2a3-308n"/>`,
		"fallback": "ooui:draggable",
	});
}

export default Component;
