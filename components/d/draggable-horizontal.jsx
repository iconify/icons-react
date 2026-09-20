import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is7he1yqf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is7he1yqf"/>`,
		"fallback": "ooui:draggable-horizontal",
	});
}

export default Component;
