import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua-9c7bmm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua-9c7bmm"/>`,
		"fallback": "entypo:area-graph",
	});
}

export default Component;
