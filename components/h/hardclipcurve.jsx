import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz03p4bhy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz03p4bhy"/>`,
		"fallback": "fad:hardclipcurve",
	});
}

export default Component;
