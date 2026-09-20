import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4e5dcc-n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4e5dcc-n"/>`,
		"fallback": "ooui:bold-arab-ain",
	});
}

export default Component;
