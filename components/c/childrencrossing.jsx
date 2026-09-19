import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiqoifb9v.css';
import '../../css/j/jbfppiblv.css';
import '../../css/y/y_zpwn9tr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiqoifb9v"/><path class="jbfppiblv"/><path class="y_zpwn9tr"/>`,
		"fallback": "fxemoji:childrencrossing",
	});
}

export default Component;
