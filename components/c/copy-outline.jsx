import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1lbyxb3k.css';
import '../../css/p/p-t5oux0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="x1lbyxb3k"/><path class="p-t5oux0e"/>`,
		"fallback": "ion:copy-outline",
	});
}

export default Component;
