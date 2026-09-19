import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa_egxbgk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa_egxbgk"/>`,
		"fallback": "entypo:controller-play",
	});
}

export default Component;
