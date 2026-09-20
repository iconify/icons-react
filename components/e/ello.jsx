import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al2951bjb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al2951bjb"/>`,
		"fallback": "la:ello",
	});
}

export default Component;
