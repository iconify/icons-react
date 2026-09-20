import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqpy7rbyd.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqpy7rbyd"/>`,
		"fallback": "memory:format-text-single-line",
	});
}

export default Component;
