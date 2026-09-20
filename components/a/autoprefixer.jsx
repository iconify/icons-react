import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tseu1abac.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tseu1abac"/>`,
		"fallback": "la:autoprefixer",
	});
}

export default Component;
