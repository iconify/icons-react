import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wylb8db_d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wylb8db_d"/>`,
		"fallback": "ooui:arrow-previous-ltr",
	});
}

export default Component;
