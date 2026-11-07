import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5_nvnutr.css';
import '../../css/x/xe9j-trbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5_nvnutr"/><path class="xe9j-trbe"/>`,
		"fallback": "solar:chevrons-left-right-bold",
	});
}

export default Component;
