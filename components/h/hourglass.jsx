import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/ca65x6bgd.css';
import '../../css/g/g9qrbsbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ca65x6bgd"/><path class="g9qrbsbdd"/></g>`,
		"fallback": "proicons:hourglass",
	});
}

export default Component;
