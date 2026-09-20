import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etwsosu7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etwsosu7w"/>`,
		"fallback": "la:hooli",
	});
}

export default Component;
