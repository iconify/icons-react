import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g30le_0ri.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g30le_0ri"/>`,
		"fallback": "picon:hourglass8",
	});
}

export default Component;
