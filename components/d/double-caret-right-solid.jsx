import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waaxqfb-q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="waaxqfb-q"/>`,
		"fallback": "teenyicons:double-caret-right-solid",
	});
}

export default Component;
