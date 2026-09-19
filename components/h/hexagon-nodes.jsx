import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp0ezjbrm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp0ezjbrm"/>`,
		"fallback": "fa6-solid:hexagon-nodes",
	});
}

export default Component;
