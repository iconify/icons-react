import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl36l_yds.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl36l_yds"/>`,
		"fallback": "whh:history",
	});
}

export default Component;
