import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxk_lacno.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxk_lacno"/>`,
		"fallback": "entypo:arrow-long-up",
	});
}

export default Component;
