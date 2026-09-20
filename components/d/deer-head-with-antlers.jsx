import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgy5qiwxa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgy5qiwxa"/>`,
		"fallback": "pinhead:deer-head-with-antlers",
	});
}

export default Component;
