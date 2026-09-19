import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7h3fsbga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7h3fsbga"/>`,
		"fallback": "entypo:chevron-with-circle-left",
	});
}

export default Component;
