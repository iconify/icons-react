import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-0hme5n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-0hme5n"/>`,
		"fallback": "entypo:heart",
	});
}

export default Component;
