import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7nlnb-_q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7nlnb-_q"/>`,
		"fallback": "entypo:home",
	});
}

export default Component;
