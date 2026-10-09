import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t80g4uv5w.css';
import '../../css/x/xtau0h03z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t80g4uv5w"/><path class="xtau0h03z"/>`,
		"fallback": "energy-icons:chevrons-up-20-bold",
	});
}

export default Component;
