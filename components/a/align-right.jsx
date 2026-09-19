import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hek2idb4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hek2idb4k"/>`,
		"fallback": "entypo:align-right",
	});
}

export default Component;
