import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ans_9vb2b.css';
import '../../css/x/xsyo_cc7b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ans_9vb2b"/><path class="xsyo_cc7b"/>`,
		"fallback": "energy-icons:arrow-up-left-20-bold",
	});
}

export default Component;
