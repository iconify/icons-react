import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7n40b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7n40b1b"/>`,
		"fallback": "thesvg-color:diagramsdotnet",
	});
}

export default Component;
