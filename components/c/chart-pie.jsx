import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whk9toiwb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whk9toiwb"/>`,
		"fallback": "fa6-solid:chart-pie",
	});
}

export default Component;
