import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqhyvdoxs.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqhyvdoxs"/>`,
		"fallback": "fa-solid:hourglass-end",
	});
}

export default Component;
