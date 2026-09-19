import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn766tb8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn766tb8z"/>`,
		"fallback": "entypo:arrow-bold-right",
	});
}

export default Component;
