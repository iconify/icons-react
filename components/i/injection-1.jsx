import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ertx3q4fd.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ertx3q4fd"/>`,
		"fallback": "lineicons:injection-1",
	});
}

export default Component;
