import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us1ea67dq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us1ea67dq"/>`,
		"fallback": "f7:arrow-down-doc",
	});
}

export default Component;
