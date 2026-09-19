import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrjdi1q_k.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrjdi1q_k"/>`,
		"fallback": "whh:brokenheart",
	});
}

export default Component;
