import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urgutvb9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urgutvb9r"/>`,
		"fallback": "famicons:chevron-back",
	});
}

export default Component;
