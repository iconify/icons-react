import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5dkcracg.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5dkcracg"/>`,
		"fallback": "fa-solid:arrows-alt-v",
	});
}

export default Component;
