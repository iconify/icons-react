import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgi717bjs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgi717bjs"/>`,
		"fallback": "ion:arrow-left-c",
	});
}

export default Component;
