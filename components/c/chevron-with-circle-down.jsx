import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdh6xhb5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdh6xhb5m"/>`,
		"fallback": "entypo:chevron-with-circle-down",
	});
}

export default Component;
