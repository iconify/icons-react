import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzkl35jpm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzkl35jpm"/>`,
		"fallback": "la:dhl",
	});
}

export default Component;
