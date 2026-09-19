import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uohs_2boh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uohs_2boh"/>`,
		"fallback": "fxemoji:blackclubsuit",
	});
}

export default Component;
