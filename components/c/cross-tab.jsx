import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtwe9kb1j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtwe9kb1j"/>`,
		"fallback": "carbon:cross-tab",
	});
}

export default Component;
