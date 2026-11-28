import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uas7zerge.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uas7zerge"/>`,
		"fallback": "pullo:caret-down-up-bold",
	});
}

export default Component;
