import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhr-rwbyo.css';
import '../../css/d/d3xearisc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhr-rwbyo"/><path class="d3xearisc"/>`,
		"fallback": "boxicons:barn",
	});
}

export default Component;
