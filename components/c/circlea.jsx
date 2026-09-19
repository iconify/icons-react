import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kihavfb9m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kihavfb9m"/>`,
		"fallback": "whh:circlea",
	});
}

export default Component;
