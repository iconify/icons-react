import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv-wanbkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv-wanbkr"/>`,
		"fallback": "ion:caret-forward-circle-sharp",
	});
}

export default Component;
