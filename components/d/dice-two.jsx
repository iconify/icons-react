import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb6y-xcsb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb6y-xcsb"/>`,
		"fallback": "fa6-solid:dice-two",
	});
}

export default Component;
