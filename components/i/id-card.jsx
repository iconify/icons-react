import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9wtks1km.css';

const viewBox = {"width":2112,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9wtks1km"/>`,
		"fallback": "vs:id-card",
	});
}

export default Component;
