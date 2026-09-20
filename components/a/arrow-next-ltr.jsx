import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy5eoqe4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy5eoqe4m"/>`,
		"fallback": "ooui:arrow-next-ltr",
	});
}

export default Component;
