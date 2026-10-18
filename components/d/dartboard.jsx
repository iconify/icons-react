import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx7t24bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx7t24bez"/>`,
		"fallback": "cbi:dartboard",
	});
}

export default Component;
