import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebj4j99dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebj4j99dm"/>`,
		"fallback": "mingcute:file-minus-corner-line",
	});
}

export default Component;
