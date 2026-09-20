import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r201o_bsd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r201o_bsd"/>`,
		"fallback": "osmic:city-gate-14",
	});
}

export default Component;
