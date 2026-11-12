import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwmy08l2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwmy08l2v"/>`,
		"fallback": "selfhst:altcha",
	});
}

export default Component;
