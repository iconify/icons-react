import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae5cuqhku.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae5cuqhku"/>`,
		"fallback": "entypo:arrow-long-down",
	});
}

export default Component;
