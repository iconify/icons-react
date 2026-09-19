import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8kj_6bzo.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8kj_6bzo"/>`,
		"fallback": "whh:braillezero",
	});
}

export default Component;
