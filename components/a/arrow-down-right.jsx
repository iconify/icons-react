import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odyw2fb5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odyw2fb5o"/>`,
		"fallback": "ix:arrow-down-right",
	});
}

export default Component;
