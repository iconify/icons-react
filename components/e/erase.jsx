import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-bl3vbug.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-bl3vbug"/>`,
		"fallback": "entypo:erase",
	});
}

export default Component;
