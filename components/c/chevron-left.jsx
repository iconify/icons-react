import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjs0mbcre.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjs0mbcre"/>`,
		"fallback": "oi:chevron-left",
	});
}

export default Component;
