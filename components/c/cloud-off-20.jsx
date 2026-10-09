import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_14drd-v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_14drd-v"/>`,
		"fallback": "energy-icons:cloud-off-20",
	});
}

export default Component;
