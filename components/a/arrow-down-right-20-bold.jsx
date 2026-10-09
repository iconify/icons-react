import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ans_9vb2b.css';
import '../../css/x/x-_i1mkli.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ans_9vb2b"/><path class="x-_i1mkli"/>`,
		"fallback": "energy-icons:arrow-down-right-20-bold",
	});
}

export default Component;
