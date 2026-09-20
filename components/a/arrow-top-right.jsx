import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds199pbjz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds199pbjz"/>`,
		"fallback": "pinhead:arrow-top-right",
	});
}

export default Component;
