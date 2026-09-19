import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n42l-qbwb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n42l-qbwb"/>`,
		"fallback": "fa6-solid:fish",
	});
}

export default Component;
