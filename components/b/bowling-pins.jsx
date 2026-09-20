import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knkt62bfy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knkt62bfy"/>`,
		"fallback": "pinhead:bowling-pins",
	});
}

export default Component;
