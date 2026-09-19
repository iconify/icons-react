import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9sq7n4kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9sq7n4kc"/>`,
		"fallback": "boxicons:dock-bottom-left",
	});
}

export default Component;
