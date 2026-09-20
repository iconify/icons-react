import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/darp4o0pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="darp4o0pm"/>`,
		"fallback": "si:ai-alt-2-line",
	});
}

export default Component;
