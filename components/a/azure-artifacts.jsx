import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuqln7d3y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuqln7d3y"/>`,
		"fallback": "cib:azure-artifacts",
	});
}

export default Component;
