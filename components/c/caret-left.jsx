import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9d7-4cb.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv9d7-4cb"/>`,
		"fallback": "fa-solid:caret-left",
	});
}

export default Component;
