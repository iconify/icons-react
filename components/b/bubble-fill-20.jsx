import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jswpi_bqi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jswpi_bqi"/>`,
		"fallback": "garden:bubble-fill-20",
	});
}

export default Component;
