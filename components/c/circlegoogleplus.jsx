import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st-_j4bqo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st-_j4bqo"/>`,
		"fallback": "whh:circlegoogleplus",
	});
}

export default Component;
