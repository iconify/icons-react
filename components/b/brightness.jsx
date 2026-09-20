import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0n8qekfx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0n8qekfx"/>`,
		"fallback": "picon:brightness",
	});
}

export default Component;
