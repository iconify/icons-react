import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8vlxmbmn.css';
import '../../css/g/g-4pifb7q.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8vlxmbmn"/><path clip-rule="evenodd" class="g-4pifb7q"/>`,
		"fallback": "lineicons:bitcoin",
	});
}

export default Component;
