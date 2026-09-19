import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0kr2gogu.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0kr2gogu"/>`,
		"fallback": "whh:dollar",
	});
}

export default Component;
