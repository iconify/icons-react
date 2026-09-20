import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqtki0bsy.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqtki0bsy"/>`,
		"fallback": "lineicons:gift",
	});
}

export default Component;
