import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv22kw38n.css';
import '../../css/m/mo7-9cc3q.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv22kw38n"/><path class="mo7-9cc3q"/>`,
		"fallback": "iwwa:add-1y",
	});
}

export default Component;
