import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1er8ya1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1er8ya1j"/>`,
		"fallback": "fa-solid:ad",
	});
}

export default Component;
