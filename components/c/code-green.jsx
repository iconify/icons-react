import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqnggccsm.css';
import '../../css/x/x0ujg73is.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqnggccsm"/><path class="x0ujg73is"/>`,
		"fallback": "meteocons:code-green",
	});
}

export default Component;
