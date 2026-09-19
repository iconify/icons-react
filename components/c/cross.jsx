import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkkl1d7ra.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkkl1d7ra"/>`,
		"fallback": "fa6-solid:cross",
	});
}

export default Component;
