import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq2d1ubnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq2d1ubnj"/>`,
		"fallback": "hugeicons:ai-imagine",
	});
}

export default Component;
