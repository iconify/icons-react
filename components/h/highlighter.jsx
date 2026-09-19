import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw4rwyb2u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw4rwyb2u"/>`,
		"fallback": "fa6-solid:highlighter",
	});
}

export default Component;
