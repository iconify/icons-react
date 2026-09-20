import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py9x-zbbz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py9x-zbbz"/>`,
		"fallback": "lineicons:dashboard-square-1",
	});
}

export default Component;
