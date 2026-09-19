import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r50l1jf5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r50l1jf5x"/>`,
		"fallback": "famicons:cloud-circle",
	});
}

export default Component;
