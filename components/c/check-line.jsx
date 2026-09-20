import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhy5-hkxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhy5-hkxr"/>`,
		"fallback": "mingcute:check-line",
	});
}

export default Component;
