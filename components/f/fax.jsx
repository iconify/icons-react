import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8a9ik84v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8a9ik84v"/>`,
		"fallback": "fa7-solid:fax",
	});
}

export default Component;
