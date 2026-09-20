import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh_p4mbjo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh_p4mbjo"/>`,
		"fallback": "ooui:bold-v",
	});
}

export default Component;
