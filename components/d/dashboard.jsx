import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncx4c8byb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncx4c8byb"/>`,
		"fallback": "file-icons:dashboard",
	});
}

export default Component;
