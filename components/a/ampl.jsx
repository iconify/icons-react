import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw659x9es.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw659x9es"/>`,
		"fallback": "cryptocurrency:ampl",
	});
}

export default Component;
