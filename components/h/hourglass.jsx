import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpcxux2ij.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpcxux2ij"/>`,
		"fallback": "fa6-solid:hourglass",
	});
}

export default Component;
