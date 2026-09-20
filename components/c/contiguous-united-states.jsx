import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t84qn9cgo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t84qn9cgo"/>`,
		"fallback": "pinhead:contiguous-united-states",
	});
}

export default Component;
