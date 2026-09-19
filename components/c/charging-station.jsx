import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6ku53bvb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6ku53bvb"/>`,
		"fallback": "fa6-solid:charging-station",
	});
}

export default Component;
