import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nla6sw03w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nla6sw03w"/>`,
		"fallback": "carbon:drag-horizontal",
	});
}

export default Component;
